import React, { useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Page,
  Box,
  useStore,
  Card,
  Row,
  Col,
  Text,
  Icon,
} from "zmp-framework/react";

import store from "../store";
import helpers from "../helpers";

dayjs.extend(relativeTime);

const ChoTotProductPage = () => {
  const products = useStore("products");

  useEffect(() => {
    store.dispatch("getProducts");
  }, []);

  return (
    <Page name="chotot-product" navbarLarge>
      <Card title="Lastest Products">
        <Row gap="gap_2" className="mx-4">
          {products.map((product) => (
            <Col key={product._id} width="50" className="mt-2">
              <Box m={0} p={2} className="bg-color-w300 rounded">
                <img
                  className="w-100 h-[182px] object-cover"
                  src={product.imageUrl}
                />
                <Text className="text-sm mt-1 mb-1 h-10 overflow-hidden">
                  {product.name}
                </Text>
                <Text className="my-0 font-bold text-venetianRed">
                  {helpers.formatMoney(product.price)}
                </Text>
                <div className="flex flex-row items-center mt-2 justify-between">
                  <div className="flex flex-row items-center">
                    <Icon
                      size={12}
                      zmp="zi-location-solid"
                      className="text-slate-500"
                    />
                    <Text className="my-0 text-[10px] text-slate-500">
                      {product.location}
                    </Text>
                  </div>
                  <Text className="my-0 text-[10px] text-slate-500">
                    {dayjs(product.createdAt).fromNow()}
                  </Text>
                </div>
              </Box>
            </Col>
          ))}
        </Row>
      </Card>
    </Page>
  );
};

export default ChoTotProductPage;
