import { useEffect, useState } from "react";

import { tempoParaSegundos } from "../../common/utils/time";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import Relogio from "./Relogio";
import Botao from "../Botao";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  });

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escola um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao>Iniciar</Botao>
    </div>
  );
}
