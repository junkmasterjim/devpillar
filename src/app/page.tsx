import { Resource, resources } from "../../resources";
import Navbar from "@/components/Navbar";
import ResourceCard from "@/components/ResourceCard";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="flex max-w-screen-2xl mx-auto justify-between pt-24">
				<div className="lg:block hidden max-w-sm w-full">sidebar</div>

				{/* Cards */}

				<div className="max-w-screen-xl gap-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto">
					{resources.map((resource: Resource) => (
						<ResourceCard
							key={Math.random()}
							name={resource.name}
							category={resource.category}
							description={resource.description}
							paid={resource.paid}
							url={resource.url}
							image={resource?.image}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
