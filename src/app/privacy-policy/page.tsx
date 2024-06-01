import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div>
      <>
        <div className="flex px-4 py-8 justify-center flex-col select-none border-b-2">
          <span className="max-w-prose mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center">
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
          {`This Privacy Policy describes how DevPillar ("we", "us", or "our")
          collects, uses, and shares your information when you use our website
          located at `}
          <Link target="_blank" href="https://devpillar.org">
            https://devpillar.org
          </Link>{" "}
          {`(the "Website").`}
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you use DevPillar, we may collect the following information:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Name:</strong> We collect your name when you provide it to
            us.
          </li>
          <li>
            <strong>Email:</strong> We collect your email address when you
            provide it to us.
          </li>
          <li>
            <strong>Non-Personal Data:</strong> We may collect non-personal data
            through the use of web cookies.
          </li>
        </ul>

        <h2>2. Purpose of Data Collection</h2>
        <p>We collect your information for the following purposes:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Spam Filtering:</strong> We use your information to filter
            spam.
          </li>
          <li>
            <strong>User Submissions:</strong> We collect your information when
            you submit content to us.
          </li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not share your data with any other parties.</p>

        <h2>4. Children&apos;s Privacy</h2>
        <p>
          We do not knowingly collect any data from children under the age of
          13. If you are a parent or guardian and you are aware that your child
          has provided us with personal information, please contact us so that
          we will be able to take necessary actions.
        </p>

        <h2>5. Updates to the Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make any
          material changes, we will notify you by email.
        </p>

        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <Link href="mailto:noah@devpillar.org">noah@devpillar.org</Link>.
        </p>

        <p>Thank you for using DevPillar!</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
