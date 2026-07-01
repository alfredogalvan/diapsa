import type { MetadataRoute } from "next";
import serviciosData from "@/data/servicios.json";
import { getBlogs } from "@/lib/api/posts";
import { getCourses } from "@/lib/api/courses";
import { getCategories } from "@/lib/api/categories";
import { getProducts } from "@/lib/api/products";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";



const BASE_URL = "https://grupodiapsa.com";

type ServiceItem = {
  href: string;
  children?: ServiceItem[];
};

function getServiceHrefs(services: ServiceItem[]): string[] {
  return services.flatMap((service) => [
    service.href,
    ...(service.children ? getServiceHrefs(service.children) : []),
  ]);
}

function getRootCategorySlugs(categories: Category[]): string[] {
  return categories
    .filter((category) => !category.parent)
    .map((category) => category.slug);
}

async function getAllProducts(): Promise<Product[]> {
  const firstPage = await getProducts({ page: 1, per_page: 100 });
  const products = [...firstPage.data];

  for (let page = 2; page <= firstPage.meta.last_page; page++) {
    const response = await getProducts({ page, per_page: 100 });
    products.push(...response.data);
  }

  return products;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const now = new Date();
  const [blogs, courses, categories, products] = await Promise.all([
    getBlogs(),
    getCourses(),
    getCategories(),
    getAllProducts(),
  ]);

  // Páginas estáticas principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/acerca-de`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/metodologia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cursos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Páginas de servicios
  const servicePages: MetadataRoute.Sitemap = getServiceHrefs(serviciosData).map((href) => ({
    url: `${BASE_URL}${href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));


  const categoryPages: MetadataRoute.Sitemap = [...new Set(getRootCategorySlugs(categories))].map((slug) => ({
    url: `${BASE_URL}/productos/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/productos/${product.category.slug}/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const cursosPages: MetadataRoute.Sitemap = courses.data.map((course) => ({
    url: `${BASE_URL}/cursos/${course.slug}`,
    changeFrequency: "monthly",
    priority: 0.7
  }))

  return [...staticPages, ...servicePages, ...categoryPages, ...productPages, ...blogPages, ...cursosPages];


}
