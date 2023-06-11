import FaqsElement from "./FaqsElement";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, including Visa, Mastercard, and American Express. We also accept PayPal.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, it takes 3-5 business days for domestic orders and 7-10 business days for international orders.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Please note that additional customs fees and taxes may apply.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase, provided the item is unused and in its original packaging. Please contact our customer support team for assistance with returns.",
  },
  {
    question: "Are the products covered by warranty?",
    answer:
      "Yes, all our products come with a standard manufacturer warranty. The duration of the warranty may vary depending on the product. Please refer to the product description for more details.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order by logging into your account on our website. Once your order has been shipped, you will receive a tracking number.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we offer bulk discounts for large orders. Please contact our sales team for more information on bulk pricing.",
  },
  {
    question: "What if my item arrives damaged?",
    answer:
      "If your item arrives damaged, please contact our customer support team within 48 hours of receiving the package. We will assist you in getting a replacement or refund.",
  },
  {
    question: "Are the products compatible with all gaming consoles?",
    answer:
      "Our products are compatible with most popular gaming consoles, including PlayStation, Xbox, and Nintendo Switch. Please check the product specifications for compatibility details.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "You can cancel your order within 24 hours of placing it. After that, please contact our customer support team, and we will do our best to assist you.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we have a dedicated customer support team available to assist you with any questions or concerns. You can reach us via email, phone, or through our website's live chat.",
  },
  {
    question: "Are there any discounts for returning customers?",
    answer:
      "Yes, we offer exclusive discounts and promotions for our returning customers. Make sure to sign up for our newsletter to receive the latest updates and offers.",
  },
  {
    question: "Do you ship to PO boxes?",
    answer:
      "Yes, we can ship to PO boxes. Please make sure to provide the correct PO box address during checkout.",
  },
  {
    question: "Can I change my shipping address after placing the order?",
    answer:
      "If you need to change your shipping address, please contact our customer support team as soon as possible. We will do our best to accommodate your request if the order has not yet been shipped.",
  },
  {
    question: "Do you offer gift wrapping services?",
    answer:
      "Currently, we do not offer gift wrapping services. However, our products are carefully packaged to ensure they arrive in excellent condition.",
  },
];

const FaqsBody = () => {
  return (
    <div className="w-full  p-4">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-semibold">
          About
          <span className="bg-gradient-to-r from-blue to-second-color bg-clip-text text-transparent">
            Shop
          </span>
        </h2>
        <div className="mt-4 flex min-h-screen flex-col lg:flex-row lg:gap-3 ">
          <div>
            {faqs.slice(0, 5).map((item, index) => {
              return <FaqsElement {...item} key={"faqs-element" + index} />;
            })}
          </div>
          <div>
            {faqs.slice(5, 10).map((item, index) => {
              return <FaqsElement {...item} key={"faqs-element" + index} />;
            })}
          </div>
          <div>
            {faqs.slice(10, 15).map((item, index) => {
              return <FaqsElement {...item} key={"faqs-element" + index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsBody;
