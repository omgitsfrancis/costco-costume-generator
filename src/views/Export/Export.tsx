import { PDFViewer, Document, Page, View, Text, Image } from "@react-pdf/renderer";
import React from "react";
import { useEmployeeBadgeData, usePriceTagData } from "../../context/FormData";
import styles from "./styles";
import logo from "./costco-logo.png";

function ExportView() {
  const employeeBadge = useEmployeeBadgeData();
  const priceTag = usePriceTagData();

  return (
    <PDFViewer height="100%" width="960px" style={styles.preview}>
      <Document>
        <Page size="letter" style={styles.page}>
          <View style={styles.employeeBadgeContainer}>
            <Image style={styles.employeeBadgeLogo} src={logo} />
            <View style={styles.employeeBadgeRedLine} />
            <Text style={styles.employeeBadgeName}>{employeeBadge.name.toUpperCase() || "NAME"}</Text>
            <Text style={styles.employeeBadgePosition}>{employeeBadge.position.toUpperCase() || "POSITION"}</Text>
            <View style={styles.employeeBadgeTenureContainer}>
              <Text style={styles.employeeBadgeEmployeeSince}>EMPLOYEE SINCE</Text>
              <Text style={styles.employeeBadgeYear}>{employeeBadge.employeeSince || "YEAR"}</Text>
            </View>
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
