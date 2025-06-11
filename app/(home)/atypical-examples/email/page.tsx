import Head from 'next/head';
import React from 'react';
import { EmailFooter } from '@/components/email/email-footer';
import { EmailHeader } from '@/components/email/email-header';
import { HeroBanner } from '@/components/email/hero-barner';
import { PromotionBlock } from '@/components/email/promotion-block';

const EmailPage: React.FC = () => (
  <>
    <Head>
      <title>Barceló Email</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="referrer" content="no-referrer" />
    </Head>

    <div className="bg-gray-200 font-sans">
      <EmailHeader />
      <HeroBanner />
      <PromotionBlock />
      <EmailFooter />
    </div>
  </>
);

export default EmailPage;
