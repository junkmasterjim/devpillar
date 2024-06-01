import Link from "next/link";

const TermsOfService = () => {
  return (
    <div>
      <>
        <div className="flex px-4 py-8 justify-center flex-col select-none border-b-2">
          <span className="max-w-prose mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
              Terms of Service
            </h1>
            <div className="flex  items-center justify-center">
              <div>
                <h2 className="xl:text-4xl sm:text-2xl text-xl font-medium capitalize text-foreground/80 tracking-tighter text-center w-full">
                  February 11, 2024
                </h2>
              </div>
            </div>
          </span>
        </div>
      </>

      <div className="prose p-4 mx-auto">
        <p className="text-muted-foreground">
          {`By accessing or using DevPillar (the "Website"), you agree to be bound
          by these Terms of Service ("Terms"). Please read these Terms carefully
          before accessing or using the Website.`}
        </p>
        <h2>1. Description of the Service</h2>
        <p>
          DevPillar is an open-source collection of Web Development &amp; Design
          resources. It is provided free of charge to all users.
        </p>
        <h2>2. User Data Collection</h2>
        <p>
          When you use DevPillar, we may collect your name and email address. We
          are committed to protecting your privacy, and our use of your personal
          information is governed by our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <h2>3. Non-Personal Data Collection</h2>
        <p>
          We may also collect non-personal data through the use of web cookies.
          This data helps us improve and customize your experience on DevPillar.
        </p>
        <h2 className="text-lg font-semibold mb-2">4. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of Canada.
        </p>
        <h2 className="text-lg font-semibold mb-2">5. Updates to the Terms</h2>
        <p>
          We may update these Terms from time to time. If we make any material
          changes, we will notify you by email.
        </p>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <Link href="mailto:noah@devpillar.org">noah@devpillar.org</Link>.
        </p>

        <p>Thank you for using DevPillar!</p>
      </div>
    </div>
  );
};

export default TermsOfService;
