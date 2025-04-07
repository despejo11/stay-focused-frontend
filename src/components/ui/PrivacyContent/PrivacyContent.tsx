'use client'

import styles from './style.module.scss'
import Line from '@/components/Line/Line'
import useThemeClass from '@/hooks/useThemeClass'
import { LinksConfig } from '@/config/links.config'

export default function PrivacyContent() {
  return (
    <div className='container'>
      <div className={styles.content}>
        <div className={styles.head}>
          <p className={styles.title}>Privacy Policy</p>

          <p className={styles.date}>
            Last updated: <span>5th March 2025</span>
          </p>

          <p className={styles.description}>
            Welcome to <span>Stay Focused</span>. Your privacy is important to
            us, and we are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and share your
            information when you use our service.
          </p>
        </div>

        <Line />

        <div className={useThemeClass(styles.list, styles.darkList)}>
          <div className={styles.textContainer}>
            <p className={styles.title}>1. Introduction</p>
            <p className={styles.description}>
              <span>Stay Focused</span> ("we," "our," or "us") provides a
              productivity platform to help users manage focus sessions, timers,
              and background sounds. This Privacy Policy explains how we handle
              your data when you use our website and services. <br /> <br /> By
              using <span>Stay Focused</span>, you agree to the collection and
              use of information as described in this policy. If you do not
              agree with our practices, please discontinue use of the service.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>2. Information We Collect</p>
            <p className={styles.description}>
              We collect different types of information to improve our services
              and provide a better experience:
            </p>

            <div className={styles.subList}>
              <div className={styles.subtextContainer}>
                <p className={styles.subtitle}>2.1 Personal Data</p>
                <p className={styles.subDescription}>
                  When you register an account or contact us, we may collect:{' '}
                  <br /> — Name (first name, last name) <br /> — Email address{' '}
                  <br /> — Account preferences (focus methodology, sound
                  settings) <br /> OAuth2 Data (if you sign in using Google,
                  GitHub, or other OAuth2 providers, we may collect basic
                  profile data provided by the service, such as your name,
                  email, and profile picture).
                </p>
              </div>

              <div className={styles.subtextContainer}>
                <p className={styles.subtitle}>2.2 Technical Data</p>
                <p className={styles.subDescription}>
                  When you use <span>Stay Focused</span>, we may collect
                  technical data, including: <br /> — IP address <br /> — Device
                  and browser type <br /> — Usage data (e.g., session durations,
                  timer usage patterns) <br /> — Cookies and tracking
                  technologies (see Section 7)
                </p>
              </div>

              <div className={styles.subtextContainer}>
                <p className={styles.subtitle}>2.3 Optional Data</p>
                <p className={styles.subDescription}>
                  If you participate in surveys or feedback sessions, we may
                  collect additional voluntary information.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>3. How We Use Your Information</p>
            <p className={styles.description}>
              We use your data to: <br /> — Provide and maintain the{' '}
              <span>Stay Focused</span> service <br /> — Customize your
              experience based on preferences <br /> — Improve our platform
              through analytics and feedback <br /> — Ensure security and
              prevent fraud <br /> — Authenticate users via OAuth2 sign-in
              providers (Google, GitHub, etc.) <br /> — Communicate updates,
              support messages, or important changes <br /> — We do not sell
              your personal information to third parties.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>4. How We Share Your Information</p>
            <p className={styles.description}>
              We share data only when necessary and with trusted partners:{' '}
              <br />
              <span>— Infrastructure Providers:</span> We use cloud services
              (such as AWS, GCP, or Heroku) to host and operate{' '}
              <span>Stay Focused</span>. <br /> <span>— Analytics Tools:</span>{' '}
              We may integrate Google Analytics or similar services to
              understand how users interact with <span>Stay Focused</span> (see
              Section 7). <br /> <span>— OAuth2 Authentication Providers:</span>{' '}
              If you sign in using Google, GitHub, or similar services, we may
              exchange authentication data with them to verify your identity.{' '}
              <br />
              <span>— Legal Requirements:</span> If required by law, we may
              disclose information in response to legal requests. <br />
              <span>— Privacy Assured:</span> We do not share data for marketing
              purposes or sell your personal information.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>5. Data Storage & Security</p>
            <p className={styles.description}>
              We take data security seriously and use industry-standard measures
              to protect your information: <br /> — Passwords are encrypted
              using bcrypt <br /> — Secure server hosting (AWS, GCP, or Heroku){' '}
              <br />— Only authorized personnel can access stored data <br /> —
              While we take security precautions, no online system is 100%
              secure, so we encourage users to choose strong passwords and
              protect their accounts.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>6. Your Rights</p>
            <p className={styles.description}>
              Depending on your location, you may have the following rights
              regarding your data: <br /> <span>— Access & Correction:</span>{' '}
              You can view and update your account information. <br />
              <span>— Data Deletion:</span>
              You can request to delete your account and associated data. <br />{' '}
              <span>— Withdraw Consent:</span> You can opt out of cookies or
              tracking (see Section 7). <br /> To make a request, contact us at{' '}
              <a href={LinksConfig.email}>info@stayfocused.one</a>
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>7. Cookies & Tracking</p>
            <p className={styles.description}>
              We may use cookies and tracking technologies to improve your
              experience: <br /> <span>— Essential Cookies:</span> Required for
              service functionality (e.g., remembering user settings). <br />
              <span>— Analytics Cookies:</span> Help us understand usage
              patterns (e.g., Google Analytics). <br />
              <span>— Preference Cookies:</span> Store user preferences, such as
              selected sound themes. <br /> <span>— How to Opt Out:</span> You
              can manage cookies in your browser settings or use browser
              extensions to block tracking.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>8. Changes to This Policy</p>
            <p className={styles.description}>
              We reserve the right to modify this Privacy Policy at any time. We
              do not provide notifications of changes, and it is your
              responsibility to review this policy periodically. The last
              updated date at the top of this page indicates when modifications
              were made.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>9. Profile Photos and Public URLs</p>
            <p className={styles.description}>
              — When uploading a profile photo, please note that it is stored on
              a third-party cloud service and may be accessible via a unique,
              non-indexed public URL. <br /> — While these URLs are not
              searchable or publicly listed, anyone with the exact link may
              access the image. <br /> — We recommend avoiding sensitive or
              confidential images.
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.title}>10. Contact Us</p>
            <p className={styles.contactDescription}>
              If you have any questions about this Privacy Policy or your data
              rights, you can contact us:
            </p>
            <a className={styles.email} href={LinksConfig.email}>
              info@stayfocused.one
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
