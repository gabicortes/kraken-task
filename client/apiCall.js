import axios from "axios";

export const getProductInfo = async () => {
  try {
    const result = await axios({
      url: "http://localhost:3001/graphql",
      method: "post",
      data: {
        query: `
                query {
                    allProducts {
                      name, power, description, price, quantity, brand, weight, height, width, length, model_code, colour, img_url
                     }
                   }
                 `,
      },
    });

    return result.data.data.allProducts;
  } catch (err) {
    console.log(err);
  }
};
