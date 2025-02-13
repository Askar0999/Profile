import Header from "@/components/Header"
import Footer from "@/components/Footer"




export default function Home() {
    return (
        <main>
            <Header />
            <section className="p-4">
                <h2>Добро пожаловать в KeySharer!</h2>
                <p>Ваше безопасное пространство для общения.</p>
            </section>
            <Footer />
        </main>
    );
}