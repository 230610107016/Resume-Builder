import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 11,
    fontFamily: "Helvetica",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#666",
    marginBottom: 8,
  },

  section: {
    marginTop: 18,
  },

  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottom: 1,
    paddingBottom: 3,
  },

  item: {
    marginBottom: 8,
  },
});

const ResumePDF = ({ resume }) => (
  <Document>

    <Page size="A4" style={styles.page}>

      <Text style={styles.title}>
        {resume.personal.fullName}
      </Text>

      <Text style={styles.subtitle}>
        {resume.personal.title}
      </Text>

      <Text>
        {resume.personal.email}
      </Text>

      <Text>
        {resume.personal.phone}
      </Text>

      <Text>
        {resume.personal.location}
      </Text>

      <View style={styles.section}>

        <Text style={styles.heading}>
          Professional Summary
        </Text>

        <Text>
          {resume.personal.summary}
        </Text>

      </View>

    </Page>

  </Document>
);

export default ResumePDF;