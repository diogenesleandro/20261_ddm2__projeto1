import React from "react";
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const cronograma = [
    { hora: "08:00", seg: "LP", ter: "MAT", qua: "DD", qui: "APS", sex: "PT" },
    { hora: "08:20", seg: "LP", ter: "MAT", qua: "DD", qui: "APS", sex: "PT" },
    { hora: "09:10", seg: "FTI", ter: "QUI", qua: "HIS", qui: "BD", sex: "ING" },
    { hora: "10:20", seg: "FTI", ter: "QUI", qua: "HIS", qui: "BD", sex: "ING" },
    { hora: "11:10", seg: "BIO", ter: "EFI", qua: "GEO", qui: "SOC", sex: "FIL" },
  ];

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {/* TELA 1: Cabeçalho e Identificação */}
        <View style={styles.page}>
          <Text style={styles.titulo}>ETEC de Itanhaém</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4248/4248174.png' }} 
            style={styles.imagemCard}
            resizeMode="contain"
          />
          <View style={styles.card}>
            <Text style={styles.subtitulo}>Informática para Internet</Text>
            <Text style={styles.descricao}>Horário Escolar - 2026</Text>
          </View>
          <Text style={styles.textoFundo}>Arraste para ver o horário</Text>
        </View>

        {/* TELA 2: Tabela de Horários */}
        <View style={styles.page}>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>1º MIN</Text>
            <Text style={styles.descricao}>Horário Escolar - 2026</Text>
          </View>
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
          <Text style={styles.textoFundo}>Arraste para ver o horário</Text>
        </View>
        {/* TELA 2: Tabela de Horários */}
        <View style={styles.page}>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>2º MIN</Text>
            <Text style={styles.descricao}>Horário Escolar - 2026</Text>
          </View>
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
          <Text style={styles.textoFundo}>Arraste para ver o horário</Text>
        </View>
        {/* TELA 2: Tabela de Horários */}
        <View style={styles.page}>
          <View style={styles.card}>
            <Text style={styles.subtitulo}>3º MIN</Text>
            <Text style={styles.descricao}>Horário Escolar - 2026</Text>
          </View>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001a33",
  },
  scrollContent: {
    flexGrow: 1,
  },
 // Altere esta linha no seu código:
page: {
  height: height - 60, // Subtraindo a altura da StatusBar e margens
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
  titulo: {
    color: "#00d4ff",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 20,
  },
  imagemCard: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    margin:30,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderLeftWidth: 5,
    borderLeftColor: "#00d4ff",
  },
  subtitulo: { color: "#FFF", fontSize: 20, fontWeight: "600" },
  descricao: { color: "#888", fontSize: 16, marginTop: 5 },
  
  tabelaContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.2)',
  },
  linha: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  cabecalho: { backgroundColor: '#00d4ff' },
  linhaPar: { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
  linhaImpar: { backgroundColor: 'transparent' },
  celula: { flex: 1, textAlign: 'center' },
  textoCabecalho: { color: '#001a33', fontWeight: 'bold', fontSize: 11 },
  textoHora: { color: '#00d4ff', fontSize: 12, fontWeight: 'bold' },
  textoMateria: { color: '#fff', fontSize: 12, flex: 1, textAlign: 'center' },
  textoLegenda: { color: '#555', fontSize: 12, fontStyle: 'italic', marginTop: 15 },
  textoFundo: { color: "#00d4ff", fontSize: 12, marginTop: 50, opacity: 0.5 },
});