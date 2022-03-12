import React from "react";
import { Page, Box, useStore, Card, Row, Col, Text } from "zmp-framework/react";

const ChoTotProductPage = () => {
  const products = useStore("products");

  return (
    <Page name="chotot-product" navbarLarge>
      <Card title="Lastest Products">
        <Row gap="gap_2" className="mx-4">
          {products.map((product) => (
            <Col key={product.id} width="50" className="mt-2">
              <Box m={0} p={2} className="bg-color-w300 rounded">
                <img
                  className="w-100 h-[182px] object-cover"
                  src="https://cdn.chotot.com/Sb61-WiT1a-m8AwTqovsFZ0wytmUiaEEO1GsbsKgI_8/preset:listing/plain/7a1513f76a07f40b1fff7009486f8b99-2755773425307559916.jpg"
                />
                <Text className="text-sm mt-1">{product.title}</Text>
              </Box>
            </Col>
          ))}
        </Row>
      </Card>
    </Page>
  );
};

export default ChoTotProductPage;
