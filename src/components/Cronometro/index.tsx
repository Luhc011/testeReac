import { useEffect, useState } from "react";

import { tempoParaSegundos } from "../../common/utils/time";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefa";
import Relogio from "./Relogio";
import Botao from "../Botao";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador >= 0) {
        setTempo(contador--);
        return regressiva(contador--);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escola um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Iniciar</Botao>
    </div>
  );
}
