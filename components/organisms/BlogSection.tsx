import Image from "next/image";
import { Blog } from "@/types/post";
import { getStorageUrl } from "@/lib/api/config";
import Link from "next/link";

interface BlogPageProps {
  blogs: Blog[]
}

export default function BlogSection({ blogs }: BlogPageProps) {
  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            NOTICIAS Y BLOG
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Mantente actualizado con las últimas tendencias en mantenimiento
            predictivo y casos de éxito de la industria
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => {
            const coverImage =
              getStorageUrl(post.cover_image) || "/images/fondo-mantenimiento.webp";

            return (
              <article
                key={post.id}
                className="group flex h-full flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/40 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative w-full h-56 bg-gray-200">
                  <Image
                    src={coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {/* Badge de categoría */}
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Fecha */}
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(post.published_at).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-6 line-clamp-3 text-gray-600">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto inline-flex w-full items-center justify-center rounded-xs border-2 border-primary bg-transparent px-4 py-2 font-medium text-primary transition-all duration-200 ease-out hover:border-primary/80 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 active:scale-[0.98] active:bg-primary/15"
                  >
                    Leer más
                  </Link>

                </div>
              </article>
            );
          })}
        </div>

        {/* CTA para ver más */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xs bg-secondary px-8 py-3 font-medium text-white shadow-md transition-all duration-200 ease-out hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 active:scale-[0.98]"
          >
            Ver todas las noticias
          </Link>
        </div>
      </div>
    </section>
  );
}
