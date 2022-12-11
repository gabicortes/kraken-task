import axios from "axios";

export const getProductInfo = async () => {
  try {
    const result = await axios({
      url: `http://${process.env.NEXT_PUBLIC_HOST}:3001/graphql`,
      method: "post",
      data: {
        query: `
                query {
                    Product (id: 1) {
                     name, power, description, price, quantity, brand, weight, height, width, length, model_code, colour, img_url
                    }
                }
              `,
      },
    });
    return result.data.data.Product;
  } catch (err) {
    console.log(err);
  }
};
