import { Card } from "@/components/Card";
import { ButtonSection, CardSection, Container, Form, InputSection, Section } from "./styles";
import { useTheme } from "styled-components";
// components
import { Input } from "@/components/Input";
import { CustumButton } from "@/components/CustomButton";


interface PropsTypes {
	name: string;
	setName: (value: string) => void;
	dueDay: number;
	setDueDay: (value: number) => void;
	closingDay: number;
	setClosingDay: (value: number) => void;
	colorFont: string;
	setColorFont: (value: string) => void;
	colorBackground: string;
	setColorBackground: (value: string) => void;
	submitForm: () => void;
}


export function FormCard(props: PropsTypes){

	const theme = useTheme();


	return(
		<Container>
			<CardSection>
				<Card card={{
					name: props.name,
					dueDay: props.dueDay,
					spent: 0,
					colorFont: props.colorFont ? props.colorFont : theme.colors.FONT_COLOR_SECONDARY,
					colorBackground: props.colorBackground ? props.colorBackground : theme.colors.SECONDARY,
					showValue: true
				}}/>
			</CardSection>

			<Form>
				<Section>
					<Input
						label="Nome do cartão"
						placeholder="Ex.: Control Finance"
						keyboardType="text"
						value={props.name}
						callback={(value) => props.setName(value)}
					/>

					<InputSection>
						<Input
							label="Fechamento da fatura"
							placeholder="Ex.: 28"
							keyboardType="numeric"
							int={true}
							value={!props.closingDay ? "" : props.closingDay}
							callback={(value) => props.setClosingDay(value)}
							style={{flex: 1}}
						/>

						<Input
							label="Vencimento"
							placeholder="Ex.: 10"
							keyboardType="numeric"
							int={true}
							value={!props.dueDay ? "" : props.dueDay}
							callback={(value) => props.setDueDay(value)}
							style={{flex: 1}}
						/>
					</InputSection>

					<InputSection>
						<Input
							label="Cor do cartão - (opcional)"
							placeholder="Ex.: #FAFAFA"
							keyboardType="text"
							value={props.colorFont}
							callback={(value) => props.setColorFont(value)}
							style={{flex: 1}}
						/>

						<Input
							label="Cor do cartão - (opcional)"
							placeholder="Ex.: #1F8FFF"
							keyboardType="text"
							value={props.colorBackground}
							callback={(value) => props.setColorBackground(value)}
							style={{flex: 1}}
						/>
					</InputSection>
				</Section>

				<ButtonSection>
					<CustumButton title="Adicionar" action={() => props.submitForm()}/>
				</ButtonSection>
			</Form>
		</Container>
	);
}