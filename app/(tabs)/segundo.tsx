import React, { useState } from "react";
// Importamos LayoutAnimation para que a abertura não seja "seca", mas sim um deslize suave
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View
} from "react-native";

// PASSO 1: Configuração obrigatória para o Android aceitar animações de layout
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen() {
  /**
   * PASSO 2: O Estado do Acordeão
   * Criamos uma "memória" para o componente. 
   * 'aberto' guarda o ID (index) da disciplina que o usuário clicou.
   * Se for 'null', significa que tudo está fechado.
   */
  const [aberto, setAberto] = useState<number | null>(null);

  const disciplinas = [
    { nome: "Análise e Proj. de Sistemas", professor: "Prof. Anderson", total: 80, teo: 40, pra: 40, tipo: "TEC" },
    { nome: "Design Digital", professor: "Prof. Marcos", total: 80, teo: 20, pra: 60, tipo: "TEC" },
    { nome: "Língua Portuguesa", professor: "Profª. Maria", total: 80, teo: 80, pra: 0, tipo: "BNC" },
    { nome: "Matemática", professor: "Prof. Ricardo", total: 80, teo: 80, pra: 0, tipo: "BNC" },
  ];

  /**
   * PASSO 3: A Função de Troca (Toggle)
   * Quando o usuário toca em uma disciplina, esta função é chamada.
   */
  const alternarAcordeon = (index: number) => {
    // LayoutAnimation avisa o React Native: "A próxima mudança de estado deve ser animada suavemente"
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    // Lógica: Se o que eu cliquei já está aberto, eu fecho (setto null). 
    // Caso contrário, eu abro o novo index.
    setAberto(aberto === index ? null : index);
  };

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>Informática para Internet</Text>

        <View style={styles.cardInfo}>
          <Text style={styles.subtitulo}>2º ano</Text>
          <Text style={styles.descricao}>
            Programador de Computadores
          </Text>
        </View>

        <View style={styles.listaContainer}>
          <Text style={styles.tituloSecao}>Grade Curricular</Text>
          
          {disciplinas.map((item, index) => (
            <View key={index} style={styles.acordeonWrapper}>
              
              {/* PASSO 4: O Gatilho do Acordeão (Cabeçalho) */}
              <TouchableOpacity 
                style={[
                  styles.botaoAcordeon, 
                  aberto === index && styles.botaoAtivo // Aplica borda se estiver aberto
                ]} 
                onPress={() => alternarAcordeon(index)}
                activeOpacity={0.7}
              >
                <Text style={styles.nomeDisciplina}>{item.nome}</Text>
                {/* Muda o ícone dinamicamente baseada no estado */}
                <Text style={styles.icone}>{aberto === index ? "−" : "+"}</Text>
              </TouchableOpacity>

              {/* PASSO 5: Renderização Condicional
                Aqui está o "efeito" propriamente dito. O conteúdo só existe no código
                se a condição 'aberto === index' for verdadeira. 
              */}
              {aberto === index && (
                <View style={styles.conteudo}>
                  <View style={styles.infoLinha}>
                    <Text style={styles.label}>Professor:</Text>
                    <Text style={styles.valor}>{item.professor}</Text>
                  </View>
                  
                  <View style={styles.gridInfo}>
                    <View>
                      <Text style={styles.label}>Carga Horária:</Text>
                      <Text style={styles.valor}>Total: {item.total}h</Text>
                      <Text style={styles.valorSub}>Teórica: {item.teo}h / Prática: {item.pra}h</Text>
                    </View>
                    
                    {/* Estilização das Tags (Técnico vs Base Comum) */}
                    <View style={styles.tagContainer}>
                      <View style={[styles.tag, item.tipo === 'TEC' ? styles.tagTec : styles.tagBnc]}>
                        <Text style={styles.tagTexto}>
                          {item.tipo === 'TEC' ? 'Técnica' : 'Base Comum'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>

        <Text style={styles.textoFundo}>Informática para Internet</Text>
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
    gap: 15,
  },
  titulo: {
    color: "#00d4ff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 40,
  },
  cardInfo: {
    backgroundColor: "rgba(0, 212, 255, 0.05)",
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#00d4ff",
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  descricao: {
    color: "#ccc",
    fontSize: 14,
  },
  listaContainer: {
    width: '100%',
  },
  tituloSecao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  acordeonWrapper: {
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 8,
    overflow: 'hidden', // Garante que o conteúdo de dentro respeite o arredondamento do card
  },
  botaoAcordeon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  botaoAtivo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 212, 255, 0.2)',
    backgroundColor: "rgba(0, 212, 255, 0.05)", // Leve destaque quando aberto
  },
  nomeDisciplina: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  icone: {
    color: '#00d4ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  conteudo: {
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Fundo um pouco mais escuro para o conteúdo aberto
  },
  infoLinha: {
    marginBottom: 10,
  },
  label: {
    color: '#00d4ff',
    fontSize: 11,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  valor: {
    color: '#fff',
    fontSize: 15,
    marginTop: 2,
  },
  valorSub: {
    color: '#aaa',
    fontSize: 13,
  },
  gridInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  tagContainer: {
    alignItems: 'flex-end',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagTec: {
    backgroundColor: '#00d4ff33',
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  tagBnc: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  tagTexto: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textoFundo: {
    color: "#333",
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    textTransform: "uppercase",
  },
});