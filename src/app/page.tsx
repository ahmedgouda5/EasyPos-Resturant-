"use client";
import MealCard from "@/features/Meals/components/MealCard";
import InvoicePanel from "@/features/Meals/shared/Invoice";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <main className="flex gap-5">
        <section className="flex-1">
          <MealCard />
        </section>
        <section className="h-screen">
          <InvoicePanel />
        </section>
      </main>
    </div>
  );
};

export default Home;
