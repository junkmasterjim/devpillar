import { Resources } from "../../resources";

const Home = () => {
	return (
		<div>
			{Resources.map((resource, i = 0) => (
				<div key={resource.name} className="py-2">
					<div>
						<p>
							{i + 1}. {resource.name}
						</p>
						<p className="ml-8">{resource.description}</p>
						<p className="ml-16">{resource.category}</p>
						<p className="ml-24">{resource.url}</p>
						<p className="ml-32">{resource.paid}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
