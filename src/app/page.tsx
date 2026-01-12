import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparePrograms from "@/components/ComparePrograms";
import MBACourses from "@/components/MBACourses";
import QualificationCriteria from "@/components/QualificationCriteria";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<Hero />
			<ComparePrograms />
			<MBACourses />
			<QualificationCriteria />
			<Benefits />
			<Footer />
		</div>
	);
}
