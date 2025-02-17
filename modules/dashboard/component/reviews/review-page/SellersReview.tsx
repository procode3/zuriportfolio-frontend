import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { reviewProps } from '../../../../../@types';
import { useState } from 'react';
import { Input } from '@ui/Input';
import { Send } from 'iconsax-react';
import star1 from '../../../../../public/assets/star1.svg';
import star2 from '../../../../../public/assets/star2.svg';
import { postReplyByReviewId } from '../../../../../http/api/controllerReview';
import { useRouter } from 'next/router';

export default function SellerReview(props: reviewProps) {
  const [reply, setReply] = useState<string>();
  const [res, setRes] = useState<boolean>(false);

  const router = useRouter();

  function getStars(rating: number) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= 1) {
        stars.push(<Image key={i} src={star1} alt="star" width={24} height={24} />);
      } else if (rating > 0) {
        stars.push(<Image key={i} src={star2} alt="star" width={24} height={24} />);
      } else {
        stars.push(<Image key={i} src={star2} alt="star" width={24} height={24} />);
      }
      rating--;
    }
    return stars;
  }
  function handleSubmit(id: string) {
    const payload = { name: 'Zuri', feedback: reply! };
    postReplyByReviewId({ id }, payload).then((res) => {
      console.log(res);
      router.reload();
    });
  }

  return (
    <div className=" w-full m-0 p-0">
      <div className=" w-full  mb-6 ">
        <div className="flex flex-col w-full mb-7">
          <div className="flex flex-row my-3 mx-0">{getStars(props.noOfStars)}</div>
          <div className="flex text-xs text-dark-600">
            <Link href="/portfolio" className="username" style={{ textDecoration: 'underline' }}>
              {props.buyerName}
            </Link>
            <Image
              src="/assets/reviewsAssets/ShortLine.svg"
              width={1}
              height={1}
              alt="Line"
              style={{ margin: '0 10px' }}
            />
            <div className="date">{props.mainDate}</div>
          </div>
          <div className="my-3 mx-0 flex text-sm text-black">{props.review}</div>
          {props.shopReply ? (
            <p className="flex text-xs m-0 mb-2 max-w-max text-dark-600">1 reply</p>
          ) : (
            <p className="flex text-xs m-0 mb-2 cursor-pointer max-w-max text-dark-600" onClick={(e) => setRes(!res)}>
              Reply customer
            </p>
          )}
          {res && (
            <form action="" className="flex items-center mb-3">
              <label htmlFor="" className="text-center w-16 py-4 px-2">
                Reply
              </label>
              <Input
                onChange={(e) => {
                  setReply(e.target.value);
                }}
                type="text"
                size={48}
                placeholder="Send"
                className="  w-full lg:w-[450px] placeholder:text-end flex"
                rightIcon={
                  <Send className="cursor-pointer" color="#777" onClick={(e) => handleSubmit(`${props.reviewId}`)} />
                }
              />
            </form>
          )}
        </div>
        {props.shopReply && (
          <div className="flex flex-col w-full p-5 mt-3 mb-7 mx-0 bg-white-200">
            <div className=" flex text-xs w-full justify-between items-center text-dark-600 ">
              <div className=" text-black text-sm font-semibold">{props.shopName}</div>
              <div className="date">{props.adminDate}</div>
            </div>
            <div className="my-3 mx-0 flex text-sm text-black">{props.shopReply}</div>
          </div>
        )}
      </div>
    </div>
  );
}
