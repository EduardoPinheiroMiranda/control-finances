import { formatCurrency } from "@/services/formatCurrency";
import { Buttles, Container, LI, TextArea, UL, Text, SectionButton, SectionSubtitles } from "./styles";
import { CustumButton } from "@/components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "@/@types/drawer.routes";


interface PropsTypes {
    data: { name: string, value: number }[][][];
}


type NAvigationProps = DrawerNavigationProp<DrawerParamList>;


export function Subtitle(props: PropsTypes){

	const navigation = useNavigation<NAvigationProps>();


	const renderList = props.data.map((list, index) => {
		return(
			<UL key={index}>
				{list.map((item) => {
					return(
						<LI key={item[0].name}>
		 					<Buttles/>
							<TextArea>
								<Text>{item[0].name}</Text>
								<Text>{formatCurrency(item[0].value)}</Text>
							</TextArea>
						</LI>
					);
				})}
			</UL>
		);
	});


	return(
		<Container>

			<SectionSubtitles>
				{renderList}
			</SectionSubtitles>
			
			<SectionButton>
				<CustumButton title="Pagar fatura" action={() => navigation.navigate("PayInvoice")}/>
			</SectionButton>
		</Container>
	);
}