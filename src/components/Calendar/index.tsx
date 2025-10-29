import { Modal } from "react-native";
import { Container, Section, SectionButton, SectionToClose } from "./styles";
import { Calendar, DateData } from "react-native-calendars";
import { Dispatch, SetStateAction, useState } from "react";
import { CustumButton } from "../CustomButton";


interface PropsTypes {
    visible: boolean;
    callback: Dispatch<SetStateAction<string>>;
    closeCalendar: Dispatch<SetStateAction<boolean>>; 
}


type MarkedDate = Record<string, {selected: boolean}>;


export function CalendarModule(props: PropsTypes){

	const [markedDates, setMarkedDates] = useState<MarkedDate | undefined>();
	const [date, setDate] = useState("");


	function handlerSelectDate(date: DateData){
		const selectDate: MarkedDate = {};
		selectDate[date.dateString] = { selected: true };
		setMarkedDates(selectDate);

		const correctDate = new Date(date.year, date.month-1, date.day).toISOString();
		setDate(correctDate.split("T")[0]);
		return;
	}

	function handlerDate(clear?: boolean){
		props.callback(clear ? "" : date);
		props.closeCalendar(false);
		return;
	}


	return(
		<Modal visible={props.visible} transparent={true} animationType="slide">
			<Container>
				
				<SectionToClose onPress={() => props.closeCalendar(false)}/>

				<Section>
					<Calendar
						onDayPress={(date) => handlerSelectDate(date)}
						markedDates={markedDates}
						enableSwipeMonths={true}
					/>

					<SectionButton>
						<CustumButton
							title="Limpar"
							width={170}
							alert={true}
							action={() => handlerDate(true)}
						/>
						<CustumButton
							title="Confirmar"
							width={170}
							action={() => handlerDate()}
						/>
					</SectionButton>
				</Section>
			</Container>
		</Modal>		
	);
}