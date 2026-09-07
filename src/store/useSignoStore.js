import { create } from "zustand";

const useSignoStore = create((set) => ({
  signoSelecionado: null,
  setSignoSelecionado: (signo) => set({ signoSelecionado: signo }),

  // Nova ação para fechar o modal limpando o signo selecionado
  limparSignoSelecionado: () => set({ signoSelecionado: null }),
}));

export default useSignoStore;
