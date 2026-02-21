import { View } from "react-native";
import CardSocialFeed from "../../components/correcao/CardSocialFeed";

export default function SocialFeed() {
  return (
    <View style={{ flex: 1, backgroundColor: "#e1e1e1", 
                   gap: 9, padding: 9 }}>
        <CardSocialFeed  
            urlImagem="https://www.marica.rj.gov.br/wp-content/uploads/2023/12/20231205_095048-scaled.jpg"
            nome="João das Couves"
            descricao="Plantando com amor"
            texto="Dia adorável no parque"
            likes={22}
        />
        <CardSocialFeed 
            urlImagem="https://cdn.cgn.inf.br/fotos-cgn/2024/02/17180148/Imagem-do-WhatsApp-de-2024-02-17-as-14.29.43_3a1debcc-454x312.jpg"
            nome="Maria das Flores"
            descricao="Cuidando do jardim"
            texto="Flores lindas hoje"
            likes={15}
        />
    </View>
  )
}
