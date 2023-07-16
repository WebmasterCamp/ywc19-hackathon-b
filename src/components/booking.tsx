import { DatePicker, Modal } from "antd";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Booking () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {

        toast.success('จองสำเร็จ', {
            autoClose: 3000,
            onClose: () => {
              window.location.href = '/summary';
            },
          });
          setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="max-w-3xl mx-auto">
            <img src="/assets/products/paolo.avif" alt="" />
            <div className="text-left ml-[20px] p-[20px]">
                <h1>โปรแกรมกายภาพบำบัดรักษาอาการแก้</h1>
                <h2 className="text-left mt-[10px] mb-[5px]">ปวดหลังจำนวน 1 ครั้ง</h2>
                <h2 className="text-[#086300] text-left">฿ 1,500.00</h2>
                <p>Lorem Ipsum is simply dummy text of the.Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply </p>
            </div>
            <div className="text-center">
            <DatePicker className="w-[250px] mx-aut mb-[10px]" />
            <button className="btn-primary w-[250px] mx-auto" onClick={showModal}>จอง</button>
            <Modal title="ชำระเงิน" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="ยืนยันการชำระเงิน" cancelText='ยกเลิก'>
                <img src="/assets/products/qr.png" alt="" />
            </Modal>
            </div>
            <ToastContainer />
        </div>
    )
}