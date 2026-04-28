import React from "react";
// Adicionado 'Image' aos imports
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const cronograma = [
    { hora: "07:30", seg: "LP", ter: "MAT", qua: "DD", qui: "APS", sex: "PT" },
    { hora: "08:20", seg: "LP", ter: "MAT", qua: "DD", qui: "APS", sex: "PT" },
    { hora: "09:10", seg: "FTI", ter: "QUI", qua: "HIS", qui: "BD", sex: "ING" },
    { hora: "10:20", seg: "FTI", ter: "QUI", qua: "HIS", qui: "BD", sex: "ING" },
    { hora: "11:10", seg: "BIO", ter: "EFI", qua: "GEO", qui: "SOC", sex: "FIL" },
  ];

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>ETEC de Itanhaém</Text>

        {/* Imagem embaixo do título principal */}
        <Image 
          source={require('../../assets/cps.png')} 
          style={styles.imagemCard}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Informática para Internet</Text>
          <Text style={styles.descricao}>Horário Escolar - 2026</Text>
        </View>

        {/* Imagem embaixo do card de horário */}
        <Image 
          source={require('../../assets/infonet.png')} 
          style={styles.imagemCard}
          resizeMode="contain"
        />

        <View style={styles.tabelaContainer}>
          <View style={[styles.linha, styles.cabecalho]}>
            <Text style={[styles.celula, styles.textoCabecalho, { flex: 0.8 }]}>HORA</Text>
            <Text style={[styles.celula, styles.textoCabecalho]}>SEG</Text>
            <Text style={[styles.celula, styles.textoCabecalho]}>TER</Text>
            <Text style={[styles.celula, styles.textoCabecalho]}>QUA</Text>
            <Text style={[styles.celula, styles.textoCabecalho]}>QUI</Text>
            <Text style={[styles.celula, styles.textoCabecalho]}>SEX</Text>
          </View>

          {cronograma.map((item, index) => (
            <View 
              key={index} 
              style={[styles.linha, index % 2 === 0 ? styles.linhaPar : styles.linhaImpar]}
            >
              <Text style={[styles.celula, styles.textoHora, { flex: 0.8 }]}>{item.hora}</Text>
              <Text style={styles.textoMateria}>{item.seg}</Text>
              <Text style={styles.textoMateria}>{item.ter}</Text>
              <Text style={styles.textoMateria}>{item.qua}</Text>
              <Text style={styles.textoMateria}>{item.qui}</Text>
              <Text style={styles.textoMateria}>{item.sex}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.textoLegenda}>
          Siglas: LP (Lógica), DD (Design), APS (Análise), FTI (Fundamentos)
        </Text>

        <Text style={styles.textoFundo}>Arraste para ver mais</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001a33",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    gap: 15,
  },
  titulo: {
    color: "#00d4ff",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 40,
    textAlign: 'center',
  },
  imagemBanner: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 5,
  },
  imagemCard: {
    width: '100%',
    height: 100,
    marginVertical: 5,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: "#00d4ff",
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  descricao: {
    color: "#888",
    fontSize: 14,
    marginTop: 4,
  },
  tabelaContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.2)',
    marginTop: 10,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  cabecalho: {
    backgroundColor: '#00d4ff',
  },
  linhaPar: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  linhaImpar: {
    backgroundColor: 'transparent',
  },
  celula: {
    flex: 1,
    textAlign: 'center',
  },
  textoCabecalho: {
    color: '#001a33',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  textoHora: {
    color: '#00d4ff',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoMateria: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    flex: 1,
  },
  textoLegenda: {
    color: '#555',
    fontSize: 10,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 5,
  },
  textoFundo: {
    color: "#333",
    fontSize: 11,
    marginTop: 20,
    textTransform: "uppercase",
  },
});