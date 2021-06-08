import { StyleSheet } from "@react-pdf/renderer";

// Styled components for @react-pdf has been depreciated
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 12,
  },
  section: {
    margin: 10,
    padding: 10,
    border: 2,
  },
  employeeBadgeContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    width: 243,
    height: 153,
    border: 2,
    borderRadius: 12,
  },
  employeeBadgeLogo: {
    width: "60%",
  },
  employeeBadgeRedLine: {
    marginTop: 3,
    backgroundColor: "red",
    width: "100%",
    height: 3,
  },
  employeeBadgeName: {
    textAlign: "center",
    width: 500,
    fontSize: 32,
  },
  employeeBadgePosition: {
    fontSize: 12,
  },
  employeeBadgeTenureContainer: {
    position: "absolute",
    bottom: 4,
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  employeeBadgeEmployeeSince: {
    fontSize: 8,
    width: 60,
    textAlign: "right",
  },
  employeeBadgeYear: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  preview: {
    alignSelf: "center",
  },
});

export default styles;
