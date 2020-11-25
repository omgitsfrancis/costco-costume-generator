import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import React from "react";
import { useEmployeeBadgeData, usePriceTagData } from "../../context/FormData";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column"
  },
  section: {
    margin: 10,
    padding: 10,
    border: 2
  },
  card: {
    width: 243,
    height: 153,
    border: 2
  },
  preview: {
    alignSelf: "center"
  }
});

function ExportView() {
  const employeeBadge = useEmployeeBadgeData();
  const priceTag = usePriceTagData();

  return (
    <PDFViewer height="100%" width="960px" style={styles.preview}>
      <Document>
        <Page size="letter" style={styles.page}>
          <View style={styles.card}>
            <Text>Name: {employeeBadge.name}</Text>
            <Text>Position: {employeeBadge.position}</Text>
            <Text>Employee Since: {employeeBadge.employeeSince}</Text>
          </View>
          <View style={styles.section}>
            <Text>Product ID: {priceTag.productId}</Text>
            <Text>Product Name: {priceTag.productName}</Text>
            <Text>Sell Price: {priceTag.sellPrice}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default ExportView;
