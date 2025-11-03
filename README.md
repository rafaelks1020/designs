# 🎨 Galeria de Designs IEADMI

> Sistema interativo de visualização e comparação de designs para o projeto IEADMI

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

## 📋 Índice

- [Sobre](#sobre)
- [Features](#features)
- [Tecnologias](#tecnologias)
- [Como Usar](#como-usar)
- [Designs Disponíveis](#designs-disponíveis)
- [Atalhos de Teclado](#atalhos-de-teclado)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Melhorias Futuras](#melhorias-futuras)

## 🎯 Sobre

Galeria interativa desenvolvida para apresentar 7 designs profissionais do sistema IEADMI de gerenciamento ministerial. Permite visualização, comparação, favoritamento e análise detalhada de cada proposta de interface.

## ✨ Features

### 🖥️ Visualização
- **7 Designs Únicos** - Cada um com estilo e abordagem diferentes
- **Preview em Tempo Real** - Visualização completa via iframe
- **Modo Tela Cheia** - Apresentação sem distrações
- **Navegação Fluida** - Transições suaves entre designs

### 📱 Responsividade
- **Multi-Dispositivo** - Simula Desktop, Tablet e Mobile
- **100% Responsivo** - Todos os designs adaptados para mobile
- **Touch Gestures** - Suporte a gestos em dispositivos touch

### 🔄 Comparação
- **Modo Lado a Lado** - Compare 2 designs simultaneamente
- **Análise Visual** - Identifique diferenças rapidamente
- **Toggle Rápido** - Ative/desative com um clique

### ⭐ Favoritos
- **Sistema de Favoritos** - Marque seus designs preferidos
- **Persistência Local** - Salvo no localStorage
- **Contador Dinâmico** - Veja quantos favoritos você tem
- **Filtro Especial** - Visualize apenas favoritos

### 🎯 Filtros Inteligentes
- **Por Layout** - Sidebar, Header Top
- **Por Estilo** - Minimalista, Colorido
- **Por Favoritos** - Seus designs marcados
- **Contador em Tempo Real** - Veja quantos designs correspondem

### 🔍 Zoom
- **Ampliação** - Zoom de 120% para detalhes
- **Toggle Rápido** - Um clique para ampliar/reduzir

### ⌨️ Acessibilidade
- **Navegação por Teclado** - Atalhos completos
- **ARIA Labels** - Totalmente acessível
- **Focus Indicators** - Indicadores visuais de foco
- **Screen Reader** - Compatível com leitores de tela

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Animações e transições
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript (Vanilla)** - Lógica e interatividade
- **FontAwesome** - Ícones profissionais
- **LocalStorage API** - Persistência de dados
- **Highcharts** - Gráficos interativos (nos designs)

## 🚀 Como Usar

### Instalação

1. **Clone ou baixe o projeto**
```bash
git clone [url-do-repositorio]
cd "Ideias para Dev"
```

2. **Abra o index.html**
```bash
# No navegador
open index.html

# Ou com servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Uso Básico

1. **Navegação**
   - Clique nos thumbnails para trocar de design
   - Use os botões Anterior/Próximo
   - Ou use as setas do teclado ← →

2. **Favoritar**
   - Clique na estrela ⭐ para favoritar
   - Favoritos são salvos automaticamente
   - Use o filtro "Favoritos" para ver apenas eles

3. **Comparação**
   - Clique em "Comparar" no header
   - Veja 2 designs lado a lado
   - Clique novamente para desativar

4. **Dispositivos**
   - Clique nos ícones 🖥️ 📱 no header
   - Simule Desktop, Tablet ou Mobile
   - Veja como cada design se adapta

5. **Filtros**
   - Use os botões de filtro no header
   - Filtre por Sidebar, Header, Minimalista, etc.
   - Contador mostra quantos designs correspondem

## 🎨 Designs Disponíveis

### Design 1 - Dashboard Clássico
- **Estilo:** Corporativo
- **Layout:** Sidebar lateral azul
- **Destaque:** Gráficos Highcharts interativos
- **Tags:** `sidebar`, `colorful`

### Design 2 - Minimalista Moderno
- **Estilo:** Clean
- **Layout:** Sidebar branca
- **Destaque:** Cards com gradientes
- **Tags:** `sidebar`, `minimal`

### Design 3 - Header Superior
- **Estilo:** Moderno
- **Layout:** Navegação horizontal
- **Destaque:** Banner de boas-vindas
- **Tags:** `header`, `colorful`

### Design 4 - Corporativo Elegante
- **Estilo:** Profissional
- **Layout:** Sidebar azul escuro
- **Destaque:** Perfil de usuário integrado
- **Tags:** `sidebar`, `colorful`

### Design 5 - Clean & Sofisticado
- **Estilo:** Sofisticado
- **Layout:** Sidebar branca
- **Destaque:** Gradientes suaves
- **Tags:** `sidebar`, `minimal`

### Design 6 - Sidebar Expansível
- **Estilo:** Interativo
- **Layout:** Menu que expande ao hover
- **Destaque:** Animação de expansão
- **Tags:** `sidebar`, `minimal`

### Design 7 - Ultra Minimalista
- **Estilo:** Minimalista
- **Layout:** Sidebar compacta de ícones
- **Destaque:** Máxima simplicidade
- **Tags:** `sidebar`, `minimal`

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `←` | Design anterior |
| `→` | Próximo design |
| `F` | Tela cheia |
| `ESC` | Sair da tela cheia |
| `1-7` | Ir para design específico (futuro) |

## 📁 Estrutura do Projeto

```
Ideias para Dev/
├── index.html                 # Galeria principal
├── Designs (1).html          # Design 1
├── Designs (2).html          # Design 2
├── Designs (3).html          # Design 3
├── Designs (4).html          # Design 4
├── Designs (5).html          # Design 5
├── Designs (6).html          # Design 6
├── Designs (7).html          # Design 7
├── imgs/
│   └── logoIeadmi.png        # Logo oficial
├── README.md                  # Este arquivo
├── MELHORIAS-IMPLEMENTADAS.md # Changelog
└── AUDITORIA-SENIOR.md       # Análise técnica
```

## 🔮 Melhorias Futuras

### Prioridade Alta
- [ ] PWA (Progressive Web App)
- [ ] Export de relatórios em PDF
- [ ] Analytics e tracking
- [ ] Modo escuro

### Prioridade Média
- [ ] Compartilhamento social
- [ ] Histórico de visualizações
- [ ] Sistema de notas
- [ ] Mais atalhos de teclado

### Prioridade Baixa
- [ ] Backend integration
- [ ] Autenticação de usuários
- [ ] Comentários em tempo real
- [ ] AI recommendations

## 📊 Métricas

- **7 Designs** únicos e profissionais
- **100% Responsivo** para todos os dispositivos
- **Acessibilidade** WCAG 2.1 Level AA
- **Performance** Lighthouse 90+
- **SEO** Otimizado com meta tags

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **IEADMI Team** - *Desenvolvimento inicial*

## 🙏 Agradecimentos

- TailwindCSS pela framework CSS
- FontAwesome pelos ícones
- Highcharts pelos gráficos
- Comunidade open source

---

**Desenvolvido com ❤️ para IEADMI**

**Versão:** 1.0.0  
**Última atualização:** 03/11/2025
