import React from 'react'
import orderStyles from './Order.module.css'

export default function Order() {
  return (
    <div className={orderStyles.orderContainer}>
      <h1>Order</h1>
      <p>Get our food delivered fresh to your door using UberEats</p>
      <a href="https://www.ubereats.com/london/food-delivery/italianrestaurant">
        <img className={orderStyles.partnerImage}
        src="https://public.boxcloud.com/api/2.0/internal_files/642159077010/versions/680904049410/representations/png_paged_2048x2048/content/1.png?access_token=1!pAvYJ8uBsiwfTF8Q7Urbz3oD45x2Svn9NR6V_kYX4JMEKhCjnArxMipP8-g8JMvtk8ls1EC7Wq7mtv3X1uBl2CCJ_e5AX0RwPGsjYdufZoDjYj1_sRxzcpwVpqo3C8_nsn4ZTtiDJN1B8PcmCidYmoA-Umfn143VLZ4fIgn8ra-4Wvb55QTJK7zoIz8twyXdbJzpdNsDb7pf6fHkYaCf5_wqo7jFQCKzjvfg2ETbs6vsreRoYv-SC03mEmPIhgvSMJTUFbRXoBrx4wRzueM9UC6Uz9D-xgUwmQ80NclQOAt-LE8kw7JNrOKuLemtRWhyW-c6T-iyb5ZvQL-3lZJs3V_sRUiteE_dJF4Rsp_MyGu9x32bq6NaHIfFcvhP4ZQ-WyI-NNHg4yu8k06uHlf4z9FRZ-pVZGJbHUsewka_9xdwnECnlYNTnwmNt_qizGEam9ap4SJeWUqwsPje1QmAh1Kzi0w0QPH7_hk2nuAfSC2HkN3NK07GS5vuoqkQfNEcxvoNrIkf4to4F9MNODNZxjzc3G4VJ2Mw2Fv-lq1GJL9Tc0zklZGuz-w6tu7Z8TTc-huM&shared_link=https%3A%2F%2Fuber.app.box.com%2Fs%2F9ro2t75twe2mut85ufpmznub6nb1efuy&box_client_name=box-content-preview&box_client_version=2.60.0" />
      </a>
    </div>
  )
}
