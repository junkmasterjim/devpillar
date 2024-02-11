import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React from "react";

const TermsOfService = () => {
	return (
		<div className="p-4 -mt-16">
			<Card className="max-w-prose mx-auto">
				<CardHeader>
					<CardTitle>Terms of Service</CardTitle>
					<CardDescription>
						<span className="font-medium">Effective Date:</span> February
						11,2024
						<br />
						<br />
						By accessing or using DevPillar (the "Website"), you agree to be
						bound by these Terms of Service ("Terms"). Please read these Terms
						carefully before accessing or using the Website.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-6">
						<div>
							<h2 className="text-lg font-semibold mb-2">
								1. Description of the Service
							</h2>
							<p>
								DevPillar is an open-source collection of Web Development &
								Design resources. It is provided free of charge to all users and
								is updated biweekly.
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								2. User Data Collection
							</h2>
							<p>
								When you use DevPillar, we may collect your name and email
								address. We are committed to protecting your privacy, and our
								use of your personal information is governed by our{" "}
								<a
									href="https://devpillar.org/privacy-policy"
									className="text-blue-500 hover:underline"
								>
									Privacy Policy
								</a>
								.
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								3. Non-Personal Data Collection
							</h2>
							<p>
								We may also collect non-personal data through the use of web
								cookies. This data helps us improve and customize your
								experience on DevPillar.
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">4. Governing Law</h2>
							<p>
								These Terms shall be governed by and construed in accordance
								with the laws of Canada.
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-2">
								5. Updates to the Terms
							</h2>
							<p>
								We may update these Terms from time to time. If we make any
								material changes, we will notify you by email.
							</p>
						</div>

						<p>
							If you have any questions about these Terms, please contact us at{" "}
							<a
								href="mailto:noah@devpillar.org"
								className="text-blue-500 hover:underline"
							>
								noah@devpillar.org
							</a>
							.
						</p>

						<p>Thank you for using DevPillar!</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default TermsOfService;
