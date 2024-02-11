import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const TermsOfService = () => {
	return (
		<div className="p-4 -mt-16">
			<Card className="max-w-prose mx-auto">
				<CardHeader>
					<CardTitle>Privacy Policy</CardTitle>
					<CardDescription>
						<span className="font-medium">Effective Date:</span> February
						11,2024
						<br />
						<br />
						This Privacy Policy describes how DevPillar ("we", "us", or "our")
						collects, uses, and shares your information when you use our website
						located at{" "}
						<Link
							href="https://devpillar.org"
							className="text-blue-500 hover:underline"
						>
							https://devpillar.org
						</Link>{" "}
						(the "Website").
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div>
							<h2 className="text-lg font-semibold mb-2">
								1. Information We Collect
							</h2>
							<p>
								When you use DevPillar, we may collect the following
								information:
							</p>
							<ul className="list-disc list-inside">
								<li>
									<strong>Name:</strong> We collect your name when you provide
									it to us.
								</li>
								<li>
									<strong>Email:</strong> We collect your email address when you
									provide it to us.
								</li>
								<li>
									<strong>Non-Personal Data:</strong> We may collect
									non-personal data through the use of web cookies.
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								2. Purpose of Data Collection
							</h2>
							<p>We collect your information for the following purposes:</p>
							<ul className="list-disc list-inside">
								<li>
									<strong>Spam Filtering:</strong> We use your information to
									filter spam.
								</li>
								<li>
									<strong>User Submissions:</strong> We collect your information
									when you submit content to us.
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">3. Data Sharing</h2>
							<p>We do not share your data with any other parties.</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								4. Children's Privacy
							</h2>
							<p>
								We do not knowingly collect any data from children under the age
								of 13. If you are a parent or guardian and you are aware that
								your child has provided us with personal information, please
								contact us so that we will be able to take necessary actions.
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								5. Updates to the Privacy Policy
							</h2>
							<p>
								We may update this Privacy Policy from time to time. If we make
								any material changes, we will notify you by email.
							</p>
						</div>

						<p>
							If you have any questions about this Privacy Policy, please
							contact us at{" "}
							<a
								href="mailto:noah@devpillar.org"
								className="text-blue-500 hover:underline"
							>
								noah@devpillar.org
							</a>
							.
						</p>

						<p>Thank you for using DevPillar! </p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default TermsOfService;
