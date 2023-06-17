const OrderInformation = () => {
  return (
    <div className="py-4">
      <h3 className="font-bold text-2xl border-b-2 border-b-primary py-2">
        Order Information
      </h3>
      <div className="flex py-4">
        <div className="w-full mt-2 space-y-4">
          <details className=" rounded-lg">
            <summary className="font-semibold bg-gray-200 px-4 py-2 text-lg cursor-pointer">
              Return policy
            </summary>
            <div className=" bg-gray-100">
              <p className="leading-6 px-3 py-2 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                inventore dolore autem libero numquam. Cupiditate provident,
                quae eos accusamus dolor ea optio quia voluptate distinctio
                eligendi repudiandae officia doloremque nesciunt?
              </p>
            </div>
          </details>
          <details className=" rounded-lg">
            <summary className="font-semibold bg-gray-200 px-4 py-2  text-lg cursor-pointer">
              Shipping Options
            </summary>
            <div className=" bg-gray-100">
              <p className="leading-6 px-3 py-2 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                inventore dolore autem libero numquam. Cupiditate provident,
                quae eos accusamus dolor ea optio quia voluptate distinctio
                eligendi repudiandae officia doloremque nesciunt?
              </p>
            </div>
          </details>
          <details className=" rounded-lg">
            <summary className="font-semibold bg-gray-200 px-4 py-2  text-lg cursor-pointer">
              Another shipping option
            </summary>
            <div className=" bg-gray-100">
              <p className="leading-6 px-3 py-2 text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                inventore dolore autem libero numquam. Cupiditate provident,
                quae eos accusamus dolor ea optio quia voluptate distinctio
                eligendi repudiandae officia doloremque nesciunt?
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
