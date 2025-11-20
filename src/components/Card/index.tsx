import { formatCurrency } from "@/services/formatCurrency";
import { Container, Section, SectionValues, TextCardName, TextExpired, TextValue } from "./styles";
import Chip from "@/../assets/svgs/chip.svg";
import { format } from "date-fns";


interface PropsTypes {
    card: {
        name: string,
        dueDay: number,
        spent: number,
        colorFont: string,
        colorBackground: string
		showValue: boolean
    }
}


export function Card(props: PropsTypes){

	const name = props.card.name;
	const expired = format(new Date().setDate(props.card.dueDay), "dd/MM");
	const spent = formatCurrency(props.card.spent);


	return(
		<Container style={{backgroundColor: props.card.colorBackground}}>
			<Section>
				<TextCardName style={{color: props.card.colorFont}}>{name}</TextCardName>
				<Chip/>
			</Section>
			<Section>
				<TextExpired style={{color: props.card.colorFont}}>Vencimento</TextExpired>
				<SectionValues>
					{props.card.dueDay === 0 ?
						<TextValue style={{color: props.card.colorFont}}>--/--</TextValue>
						:
						<TextValue style={{color: props.card.colorFont}}>{expired}</TextValue>
					}

					{props.card.showValue ?
						<TextValue style={{color: props.card.colorFont}}>{spent}</TextValue>
						:
						<TextValue style={{color: props.card.colorFont}}>R$ ****</TextValue>
					}
				</SectionValues>
			</Section>
		</Container>
	);
}