import { useEffect } from "react";
import { decodeEmail, venue } from "../../data/venue";
import styles from "./Terms.module.css";

function Terms() {
  // Arrive at the top of the page rather than keeping the prior scroll position.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const email = decodeEmail(venue.email);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <div className={styles.content}>
          <p className={styles.intro}>
            Welcome to The Orchard Bar website (https://theorchardbar.co.uk/).
            These Terms and Conditions ("Terms") govern your use of the Website
            and any services, features, or content offered by the Author.
          </p>

          <h2 className={styles.section}>1. User Consent</h2>
          <p>
            By using this Website, you consent to these Terms and acknowledge
            that you have read and understood our Privacy Policy. You agree to
            comply with all applicable laws and regulations, including those
            regarding the collection and use of personal data.
          </p>

          <h2 className={styles.section}>2. Collection of Personal Data</h2>
          <p>
            b. <strong>Google Analytics</strong>: We use Google Analytics to
            analyze user interactions with our Website. Google Analytics may
            collect anonymous data, such as your IP address and browsing
            behavior, for the purpose of improving our Website and user
            experience.
          </p>

          <h2 className={styles.section}>3. Use of Personal Data</h2>
          <p>
            b. <strong>Google Analytics</strong>: We use Google Analytics data
            to understand user behavior, improve our content, and enhance user
            experience. Google Analytics may store and process data according to
            their own privacy policy.
          </p>

          <h2 className={styles.section}>4. Third-Party Services</h2>
          <p>
            a. <strong>Table Agent</strong>: We use Table Agent as our table
            booking service. Please refer to their terms to know more.
          </p>
          <p>
            b. <strong>Google Analytics</strong>: Google's privacy policy
            applies to the data collected and processed by Google Analytics.
          </p>

          <h2 className={styles.section}>5. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal data from
            unauthorized access or disclosure. However, no method of
            transmission over the Internet is completely secure, and we cannot
            guarantee the security of your data 100%.
          </p>

          <h2 className={styles.section}>6. Privacy Policy</h2>
          <p>
            For more details on how your personal data is collected, used, and
            protected, please refer to our Privacy Policy.
          </p>

          <h2 className={styles.section}>7. Changes to Terms and Conditions</h2>
          <p>
            The Orchard Bar reserves the right to update or modify these Terms at
            any time without prior notice. Your continued use of the Website
            after any changes signifies your acceptance of the updated Terms.
          </p>

          <h2 className={styles.section}>8. Your Rights</h2>
          <p>
            Under GDPR and the UK Data Protection Act 2018, you have certain
            rights regarding your personal data. These rights include, but are
            not limited to:
          </p>
          <ul className={styles.list}>
            <li>
              The right to access your personal data and obtain information about
              how it is processed.
            </li>
            <li>
              The right to rectify any inaccuracies in your personal data.
            </li>
            <li>
              The right to erasure (also known as the "right to be forgotten"),
              allowing you to request the deletion of your personal data under
              specific circumstances.
            </li>
            <li>
              The right to restrict processing, enabling you to limit the ways in
              which your data is processed.
            </li>
            <li>
              The right to data portability, which allows you to request a copy
              of your data in a commonly used format.
            </li>
            <li>
              The right to object to the processing of your personal data,
              particularly in cases of direct marketing.
            </li>
            <li>
              The right not to be subject to automated decision-making or
              profiling that significantly affects you.
            </li>
          </ul>
          <p>
            To exercise any of these rights or to make inquiries about your
            personal data collected by the Author or third-party service
            providers, please contact us at {email}. We will respond to your
            request within the time frames specified by GDPR and the UK Data
            Protection Act 2018.
          </p>
          <p>
            Please note that exercising your rights may be subject to certain
            conditions and exceptions under GDPR and the UK Data Protection Act
            2018. For more information, refer to the GDPR and UK Data Protection
            Act 2018 legislation or consult with a legal professional.
          </p>

          <h2 className={styles.section}>9. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and
            Conditions, please contact us at {email}.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Terms;
