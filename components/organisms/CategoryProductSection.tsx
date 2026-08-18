import { Category } from "@/types/category"
import CategoryCard from "../molecules/CategoryCard";
// import SubCategoryCard from "../molecules/SubCategoryCard";

interface Props {
    category: Category;
}
export default function CategoryProductSection({ category }: Props) {
    return (
        <section>
            <CategoryCard category={category} href={`/productos/${category.slug}`} />

            {/* Subcategorías */}
            {/* {category.children && category.children.length > 0 && (
                <div className="mt-8 mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                        Subcategorías
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.children.map((subCategory) => (
                            <SubCategoryCard
                                key={subCategory.id}
                                subCategory={subCategory}
                            />
                        ))}
                    </div>
                </div>
            )} */}
        </section>
    )
} 