import { Input } from "@/components/Input";
import { Container, Form, SectionButton } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/Auth.context";
import { CustumButton } from "@/components/CustomButton";
import { AlertDefault, PopUp } from "@/components/PopUp";
import { Spinner } from "@/components/Spinner";
import { ExternalCalls } from "@/services/externalCalls";


export function LimitControl(){

	const authContex = useContext(AuthContext);
	const [limit, setLimit] = useState(authContex?.user?.limit ?? 0);
	const [dueDay, setDueDay] = useState(authContex?.user?.dueDay ?? 0);
	const [closeDay, setCloseDay] = useState(authContex?.user?.closeDay ?? 0);
	const [loading, setLoading] = useState(false);
	const [openPopUp, setOpenPopUp] = useState(false);
	const [popUp, setPopUp] = useState(AlertDefault);


	function constructionPopUp(params: {alert?: boolean, title?: string, msg: string}){
		setPopUp({
			alert: params.alert ?? true,
			title: params.title ?? "Atenção",
			message: params.msg,
			buttons: [{ title: "Fechar", action: () => setOpenPopUp(false) }]
		});
		setOpenPopUp(true);
	}


	async function handlerForm(){

		const externalCalls = new ExternalCalls();

        
		if(!dueDay || !limit || !closeDay) return constructionPopUp({msg: "Preencha todos os campos."});
		
        
		setLoading(true);
		const body = {limit, dueDay, closingDay: closeDay};
		const response = await externalCalls.PUT("/user/controlLimit", body);
		setLoading(false);


		if(!response.success) return constructionPopUp({alert: true, msg: response.msg});


		constructionPopUp({alert: false, title: "Sucesso", msg: "Dados atualizados."});
		authContex?.getData();

		return;
	}


	return(
		<Container>
			<Form>
				<Input
					label="Limite mensal"
					keyboardType="numeric"
					value={limit}
					placeholder="R$ 1000,00"
					callback={(value) => setLimit(value)}
					coin={true}
				/>

				<Input
					label="Dia de vencimento"
					keyboardType="numeric"
					value={dueDay}
					placeholder="10"
					callback={(value) => setDueDay(value)}
					int={true}
				/>

				<Input
					label="Dia de fechamento"
					keyboardType="numeric"
					value={closeDay}
					placeholder="5"
					callback={(value) => setCloseDay(value)}
					int={true}
				/>
			</Form>

			<SectionButton>
				<CustumButton title="Atualizar" action={handlerForm}/>
			</SectionButton>
			<Spinner visible={loading}/>
			<PopUp visible={openPopUp} data={popUp}/>
		</Container>
	);
}