import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { colors } from "../../themes"


function interpolateColor(value, color1, color2){
    // Garantir que o valor esteja entre 0 e 1
    const percentage = Math.max(0, Math.min(1, value));
  
    // Extrair os componentes RGB das cores
    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);
  
    // Calcular a cor intermediária
    const r = Math.round(r1 + (r2 - r1) * percentage);
    const g = Math.round(g1 + (g2 - g1) * percentage);
    const b = Math.round(b1 + (b2 - b1) * percentage);
  
    // Retornar a cor interpolada em formato hexadecimal
    return rgbToHex(r, g, b);
};
  
// Função para converter de HEX para RGB
function hexToRgb(hex){
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};
  
// Função para converter de RGB para HEX
function rgbToHex(r, g, b){
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
  

export function ExpenseIndicator ({data}){

    const value = data.value;                       // Valor entre 0 e 100
    const size = data.size;                         // Tamanho do gráfico
    const strokeWidth = data.strokeWidth;           // Espessura do arco
    const gradientColors = ["#3CEE71", "#FF4D4D"];  // Cores do gradiente
    const backgroundColor = colors.color_9;         // Cor do fundo do arco


    const radius = (size - strokeWidth) / 2;
    const circumference = Math.PI * radius;         // Comprimento total do arco
    const progress = (value / 100) * circumference;

    const solidColor = interpolateColor(value / 100, gradientColors[0], gradientColors[1]);

    return (
        <View style={[styles.container, { width: size, height: size / 2 }]}>
            <Svg 
                width={size} 
                height={size / 2} 
                viewBox={`0 0 ${size} ${size / 2}`}
            >
                <Defs >
                    <LinearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <Stop offset="50%" stopColor={gradientColors[0]} />
                        <Stop offset="100%" stopColor={gradientColors[1]} />
                    </LinearGradient>
                </Defs>

                {/* Fundo do arco */}
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={backgroundColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        startAngle={-Math.PI / 2}
                        endAngle={Math.PI / 2}
                    />
                {/* Progresso */}
                <Path
                    d={`M ${size / 2 - radius}, ${size / 2}
                        A ${radius} ${radius} 0 0 1 ${size / 2 + radius}, ${size / 2}`}
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${progress} ${circumference}`}
                />
            </Svg>

            <Text style={[styles.text, {color: solidColor}]}>
                {Math.round(value)}%
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: -50
  },
});
