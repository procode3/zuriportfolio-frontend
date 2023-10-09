import React from 'react';
import Image from 'next/image';
import VerificationLayout from './component/verificationLayout';

function VerificationComplete() {
  return (
    <VerificationLayout>
      <Image
        className="w-[218px] h-[159px] xl:w-[218px] xl:h-[218px] mx-auto mt-16 md:mt-16 lg:"
        src="/assets/images/verification-complete.svg"
        alt=""
        width={218}
        height={218}
      />
      <div className=" sm:bg-brand-green-ttr px-4 max-w-[712px] sm:px-[40px] md:px-[58px] lg:px-[120px] py-5 sm:border sm:border-brand-disabled rounded-[32px] z-10">
        <h1 className=" font-manropeEB text-[24px] md:text-[36px] text-center">Verification Complete</h1>
        <p className=" font-manropeL text-[16px] text-center text-[#737876] md:text-[#000] py-[16px] ">
          Account verification complete. You will be redirected to a login page.
        </p>
      </div>
    </VerificationLayout>
  );
}

export default VerificationComplete;
