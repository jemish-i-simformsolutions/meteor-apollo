import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { findDonation, getAllDonation } from "../Query/query";
import GlobalPostComponent from "./GlobalPostComponent";

export const FindDonation = () => {
  const { data, loading } = useQuery(findDonation, {
    variables: { uid: Meteor.userId() },
  });
  return (
    <div id="donation_list">
      {loading === false
        ? data.findDonation.map((val, index) => {
            return (
              <div id="subComponent">
                <GlobalPostComponent
                  type={val.type}
                  pincode={val.pincode}
                  address={val.address}
                  quantity={val.quantity}
                  img={
                    val.type === "Financial"
                      ? "https://www.creditsesame.com/wp-content/uploads/2016/12/charity_0001_Layer-7.png"
                      : val.type === "Food"
                      ? "https://c.ndtvimg.com/2021-02/tha0sgq8_food-donation_625x300_26_February_21.jpg"
                      : val.type === "Clothe"
                      ? "https://rinse-cdn.s3.amazonaws.com/media/filer_public_thumbnails/filer_public/61/fc/61fcab6d-23dd-4c0c-b21e-0f672ed7f39a/clothing-donation-etiquette-and-how-to-guide.jpg__1170x0_q85_subsampling-2_upscale.jpg"
                      : val.type === "Blood"
                      ? "http://c.files.bbci.co.uk/182FF/production/_107317099_blooddonor976.jpg"
                      : val.type === "Others"
                      ? "https://etools.mwoy.org/EtoolsBaseDir/2018/5/1/8/members/4391589/Anonymous-sperm-donation-in-Greece.jpg"
                      : "https://etools.mwoy.org/EtoolsBaseDir/2018/5/1/8/members/4391589/Anonymous-sperm-donation-in-Greece.jpg"
                  }
                />
              </div>
            );
          })
        : "empty"}
    </div>
  );
};
