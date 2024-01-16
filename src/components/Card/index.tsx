"use client";

import Image from "next/image";
import { CardTypes, ServicesTypes } from "../types";
import styles from "./styles.module.css";
import React from "react";
import Text from "../Elements/Text";
import Division from "../Elements/Division";

export const Card = ({ data }: { data: CardTypes }) => {
  return (
    <>
      <div
        className={`${styles.card} ${
          data.category_name ? styles[data.category_name] : ""
        }`}
      >
        <div className={styles.detail_container}>
          <Image
            className={styles.image}
            width={120}
            height={170}
            alt={data.image_url}
            src={data.image_url}
          />
          <div className={styles.content_right}>
            <Text className={styles.category}>
              {data.category_name.toUpperCase()}
            </Text>
            <Text className={styles.price}>${data.price}</Text>
            <Text className={styles.status}>
              {data.type_name.toUpperCase()}
            </Text>
          </div>
        </div>
        <div className={styles.service_container}>
          <div className={styles.service_grid}>
            {data.services.map((service: ServicesTypes) => {
              return (
                <div key={`index-${service.id}`} className={styles.service_item}>
                  <Text
                    className={styles.room_text}
                  >{`${service.name} - $${service.price}`}</Text>
                  {service.id % 3 === 0 ? <></> : <Division></Division>}
                </div>
              );
            })}
          </div>
        <button className={styles.enquire_button}>{'ENQUIRE NOW'}</button>
        </div>
        <div className={styles.ellipse}></div>
        {/* <h2>
          Templates <span>-&gt;</span>
        </h2>
        <p>Explore starter templates for Next.js.</p> */}
      </div>
    </>
  );
};
