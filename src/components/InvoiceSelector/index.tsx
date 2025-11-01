import { FlatList } from "react-native";
import { Container, Description, Line, Section, TextDescription, TextValue } from "./styles";
import { Label } from "./Label";
import { useEffect, useRef, useState } from "react";
import { Invoice } from "@/@types/user.context";
import { formatCurrency } from "@/services/formatCurrency";
import { DefaultTheme, useTheme } from "styled-components";


export interface Subtitles {
    invoiceId: string;
    current: boolean;
    pay: boolean;
    label: string;
}


interface PropsTypes {
    subtitles?: Subtitles[];
	invoices?: Invoice[];
	invoice?: Invoice;
	selectedInvoice: (index: number) => void
}


export function InvoiceSelector(props: PropsTypes){
	
	
	const flatListRef = useRef<FlatList | null>(null);
	const theme: DefaultTheme = useTheme();
	const [indicatorColor, setIndicatorColor] = useState(theme.colors.CURRENT);


	useEffect(() => {
		if(props.subtitles){
			const positionStart = props.subtitles.findIndex((item) => item.current === true);
			centerItem(positionStart);
		}
	}, []);


	function selectedIndicatorColor(invoice: Invoice){
		if(invoice?.pay) return setIndicatorColor(theme.colors.PAY);
		if(invoice?.current) return setIndicatorColor(theme.colors.CURRENT);
		if(!invoice?.pay) return setIndicatorColor(theme.colors.SECONDARY);
	}


	function centerItem(index: number){
		flatListRef.current?.scrollToIndex({
			index,
			animated: true,
			viewPosition: 0.5
		});

		if(props.invoices){
			selectedIndicatorColor(props.invoices[index]);
			props.selectedInvoice(index);
		} 
	}
    

	return(
		<Container>
			<FlatList
				ref={flatListRef}
				data={props.subtitles}
				renderItem={({item, index}) => <Label
					subtitles={item}
					centerInvoice={centerItem}
					index={index}
				/>}
				keyExtractor={(item) => item.invoiceId}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				getItemLayout={(__, index) => ({
					length: 105,
					offset: 105 * index,
					index: index
				})}
				style={{paddingVertical: 20, paddingHorizontal: 20}}
			/>

			<Section color={indicatorColor}>
				<TextValue>{formatCurrency(Number(props.invoice?.amount))}</TextValue>
				{props.invoice?.limit && (
					<Description>
						<Line>
							<TextDescription>Limite:</TextDescription>
							<TextDescription>{formatCurrency(props.invoice.limit)}</TextDescription>
						</Line>
						<Line>
							<TextDescription>Utilizado:</TextDescription>
							<TextDescription>{formatCurrency(props.invoice.amount)}</TextDescription>
						</Line>
						<Line>
							<TextDescription>Disponível:</TextDescription>
							<TextDescription>{formatCurrency(props.invoice.available)}</TextDescription>
						</Line>
					</Description>
				)}
			</Section>
		</Container>
	);
}