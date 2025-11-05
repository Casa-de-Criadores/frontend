export default function Home() {
  return (
      <div className="min-h-screen bg-white text-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-black/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="font-bold text-xl tracking-tight">CASA DE CRIADORES</div>
              <div className="text-xs text-black/40">/ MARKETPLACE</div>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#why" className="text-sm hover:opacity-60 transition-opacity">
                Why migrate
              </a>
              <a href="#how" className="text-sm hover:opacity-60 transition-opacity">
                How it works
              </a>
              <button className="bg-black text-white px-6 py-2 text-sm hover:bg-black/80 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-black/5 text-sm font-medium mb-4">
                Lançamento oficial — Casa de Criadores 56
              </div>

              <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tighter max-w-5xl">
                Sua loja.<br />
                Nossa plataforma.<br />
                Sem mensalidades.
              </h1>

              <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
                A Casa de Criadores construiu uma plataforma de vendas exclusiva para nossos criadores.
                Pare de pagar por Shopify, Wix, ou outras ferramentas fragmentadas.
                Venda tudo em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="bg-black text-white px-8 py-4 text-base hover:bg-black/80 transition-colors">
                  Migrar minha loja
                </button>
                <button className="border-2 border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-colors">
                  Ver demonstração
                </button>
              </div>

              <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">R$ 0</div>
                  <div className="text-sm text-black/60">Mensalidade de plataforma</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">Mínima</div>
                  <div className="text-sm text-black/60">Taxa apenas para manter servidores</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm text-black/60">Suporte para migração incluído</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement - Current State */}
        <section className="py-20 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight mb-12">
              O problema que estamos resolvendo.
            </h2>
            <div className="space-y-12">
              <div className="border-l-2 border-white/20 pl-8 space-y-4">
                <div className="text-2xl font-bold">Fragmentação cara</div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Cada criador da Casa paga individualmente por plataformas como Shopify (R$ 150+/mês),
                  ferramentas de email marketing, gateways de pagamento separados, hospedagem de imagens.
                  São centenas de reais por mês em custos duplicados.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-8 space-y-4">
                <div className="text-2xl font-bold">Identidade diluída</div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Seus clientes visitam lojas genéricas que não refletem a força da marca Casa de Criadores.
                  Cada criador está isolado quando deveríamos estar fortalecendo o coletivo.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-8 space-y-4">
                <div className="text-2xl font-bold">Trabalho técnico desnecessário</div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Você é designer, não desenvolvedor web. Mas passa horas configurando plugins,
                  lutando com temas quebrados, e tentando entender painéis de controle complexos
                  feitos para e-commerces genéricos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution - What We Built */}
        <section id="why" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 tracking-tight">
              Construímos algo melhor.<br />
              Especificamente para você.
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="text-6xl">01</div>
                <h3 className="text-3xl font-bold">Vitrine unificada</h3>
                <p className="text-black/60 text-lg leading-relaxed">
                  Todos os criadores da Casa de Criadores em uma única plataforma.
                  Seus clientes podem descobrir todo o ecossistema sem sair do nosso domínio.
                  Mais visibilidade, menos esforço.
                </p>
                <ul className="space-y-3 text-black/70">
                  <li>→ URL própria dentro de casadecriadores.com.br</li>
                  <li>→ Cross-discovery com outros criadores</li>
                  <li>→ Identidade visual consistente da Casa</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="text-6xl">02</div>
                <h3 className="text-3xl font-bold">Digital + Físico integrado</h3>
                <p className="text-black/60 text-lg leading-relaxed">
                  Venda lookbooks digitais, padrões, e-books junto com peças físicas.
                  Tudo no mesmo carrinho, mesma experiência de checkout.
                  Sem precisar de múltiplas plataformas.
                </p>
                <ul className="space-y-3 text-black/70">
                  <li>→ Upload e entrega automática de arquivos digitais</li>
                  <li>→ Integração com Correios para produtos físicos</li>
                  <li>→ Bundles: venda digital + físico juntos</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="text-6xl">03</div>
                <h3 className="text-3xl font-bold">Infraestrutura compartilhada</h3>
                <p className="text-black/60 text-lg leading-relaxed">
                  Pagamentos, hospedagem, CDN, backups, segurança — tudo gerenciado centralmente.
                  Você foca em criar. Nós cuidamos da tecnologia.
                </p>
                <ul className="space-y-3 text-black/70">
                  <li>→ Gateway de pagamento unificado (menores taxas)</li>
                  <li>→ Uptime e performance garantidos</li>
                  <li>→ Atualizações automáticas, zero manutenção</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="text-6xl">04</div>
                <h3 className="text-3xl font-bold">Suporte real</h3>
                <p className="text-black/60 text-lg leading-relaxed">
                  Não é um chatbot. Não é um fórum. É uma equipe que entende moda,
                  entende a Casa de Criadores, e está aqui para ajudar você a vender mais.
                </p>
                <ul className="space-y-3 text-black/70">
                  <li>→ Migração assistida de lojas existentes</li>
                  <li>→ Onboarding personalizado para novos criadores</li>
                  <li>→ Suporte em português, por pessoas reais</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section id="how" className="py-32 px-6 bg-black/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 tracking-tight">
              Como funciona a migração
            </h2>
            <p className="text-xl text-black/60 mb-20 max-w-3xl">
              Sabemos que mudar de plataforma dá trabalho. Por isso, oferecemos
              suporte completo para transferir sua loja existente.
            </p>

            <div className="space-y-16">
              <div className="flex gap-8 items-start">
                <div className="text-7xl font-bold text-black/10 flex-shrink-0 w-32">01</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-3xl font-bold">Agende sua migração</h3>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Preencha o formulário com informações da sua loja atual (Shopify, Wix, etc).
                    Nossa equipe agenda uma call de 30 minutos para entender seu catálogo e necessidades específicas.
                  </p>
                  <div className="pt-2 text-sm text-black/40">
                    Tempo estimado: 30 minutos
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="text-7xl font-bold text-black/10 flex-shrink-0 w-32">02</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-3xl font-bold">Nós migramos seus produtos</h3>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Nossa equipe transfere seu catálogo: fotos, descrições, preços, variantes.
                    Você revisa tudo antes de ir ao ar. Fazemos ajustes até ficar perfeito.
                  </p>
                  <div className="pt-2 text-sm text-black/40">
                    Tempo estimado: 3-5 dias úteis
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="text-7xl font-bold text-black/10 flex-shrink-0 w-32">03</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-3xl font-bold">Configure e customize</h3>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Ajuste descrições, organize coleções, defina políticas de envio.
                    Oferecemos um tutorial ao vivo do painel de controle — muito mais simples que Shopify.
                  </p>
                  <div className="pt-2 text-sm text-black/40">
                    Tempo estimado: 1-2 horas
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="text-7xl font-bold text-black/10 flex-shrink-0 w-32">04</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-3xl font-bold">Vá ao ar e comece a vender</h3>
                  <p className="text-black/60 text-lg leading-relaxed">
                    Sua nova loja entra no ar em casadecriadores.com.br/seu-nome.
                    Atualize links nas suas redes sociais. Cancele sua assinatura antiga.
                    Economize centenas de reais por mês.
                  </p>
                  <div className="pt-2 text-sm text-black/40">
                    Imediato após aprovação
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white border-2 border-black/10 space-y-4">
              <div className="font-bold text-xl">Para novos criadores da Casa de Criadores</div>
              <p className="text-black/60">
                Se você está participando pela primeira vez no CDC 56 (julho 2025) ou eventos futuros,
                a plataforma será obrigatória para todos os participantes.
                Não se preocupe — o onboarding é ainda mais simples quando você começa do zero.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 tracking-tight">
              Estrutura de custos transparente
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-black text-white space-y-4">
                <div className="text-3xl font-bold">R$ 0/mês</div>
                <div className="text-xl text-white/80">Mensalidade de plataforma</div>
                <p className="text-white/60 leading-relaxed">
                  Não cobramos assinatura mensal. Este é um projeto sem fins lucrativos construído
                  para fortalecer o ecossistema da Casa de Criadores.
                </p>
              </div>

              <div className="p-8 border-2 border-black/10 space-y-4">
                <div className="text-3xl font-bold">Taxa mínima de infraestrutura</div>
                <div className="text-xl text-black/70">Apenas para manter servidores</div>
                <p className="text-black/60 leading-relaxed">
                  Cobramos uma taxa pequena por transação para cobrir custos de hospedagem,
                  armazenamento, largura de banda e processamento de pagamentos.
                  Muito menor que qualquer plataforma comercial.
                </p>
                <div className="pt-4 text-sm text-black/40">
                  * Valores exatos serão definidos e comunicados antes do lançamento oficial
                </div>
              </div>

              <div className="p-8 bg-black/5 space-y-4">
                <div className="text-2xl font-bold">Compare com alternativas:</div>
                <div className="space-y-3 text-black/70">
                  <div className="flex justify-between items-center pb-2 border-b border-black/10">
                    <span>Shopify Basic</span>
                    <span className="font-bold">R$ 150+/mês</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-black/10">
                    <span>Wix E-commerce</span>
                    <span className="font-bold">R$ 100+/mês</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-black/10">
                    <span>Email marketing separado</span>
                    <span className="font-bold">R$ 50+/mês</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-black/10">
                    <span>Apps e plugins extras</span>
                    <span className="font-bold">R$ 100+/mês</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 text-xl font-bold">
                    <span>Total mensal típico:</span>
                    <span>R$ 400-600/mês</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-6 bg-black/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 tracking-tight">
              Perguntas frequentes
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "Posso manter minha loja atual enquanto testo a plataforma?",
                  a: "Sim. Durante o período de migração, recomendamos manter sua loja antiga ativa até você estar 100% confortável com a nova plataforma."
                },
                {
                  q: "E se eu já tiver clientes cadastrados na minha loja atual?",
                  a: "Podemos migrar sua base de clientes (com consentimento deles, seguindo LGPD) ou você pode começar fresh. Discutimos a melhor estratégia na call de migração."
                },
                {
                  q: "Quanto tempo leva para processar pagamentos?",
                  a: "Trabalhamos com gateways brasileiros confiáveis. O prazo de repasse segue os padrões do mercado (tipicamente D+30 para cartão de crédito, mais rápido para PIX)."
                },
                {
                  q: "Posso vender internacionalmente?",
                  a: "A plataforma suporta envio internacional para produtos físicos e vendas globais para produtos digitais. Taxas e logística internacional são gerenciadas caso a caso."
                },
                {
                  q: "E se eu decidir sair da plataforma no futuro?",
                  a: "Você mantém total propriedade dos seus dados. Podemos exportar seu catálogo completo e base de clientes a qualquer momento. Sem lock-in."
                },
                {
                  q: "Quem tem acesso aos meus dados de vendas?",
                  a: "Apenas você e a administração da Casa de Criadores (para análises agregadas e anônimas do ecossistema). Nunca compartilhamos dados individuais de criadores."
                }
              ].map((faq, i) => (
                  <div key={i} className="pb-8 border-b border-black/10 last:border-0">
                    <div className="text-xl font-bold mb-3">{faq.q}</div>
                    <p className="text-black/60 leading-relaxed">{faq.a}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight">
              Pronto para migrar?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Junte-se aos criadores que já estão construindo suas lojas na plataforma oficial
              da Casa de Criadores. Suporte completo incluído.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition-colors">
                Agendar migração
              </button>
              <button className="border-2 border-white px-8 py-4 text-base hover:bg-white hover:text-black transition-colors">
                Falar com suporte
              </button>
            </div>
            <div className="text-sm text-white/40 pt-4">
              Lançamento oficial: Casa de Criadores 56 • Julho 2025
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="font-bold mb-4">Plataforma</div>
                <div className="space-y-2 text-sm text-black/60">
                  <div>Funcionalidades</div>
                  <div>Roadmap</div>
                  <div>Status do sistema</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-4">Recursos</div>
                <div className="space-y-2 text-sm text-black/60">
                  <div>Documentação</div>
                  <div>Tutoriais</div>
                  <div>Base de conhecimento</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-4">Casa de Criadores</div>
                <div className="space-y-2 text-sm text-black/60">
                  <div>Sobre o coletivo</div>
                  <div>Próximos eventos</div>
                  <div>Contato institucional</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-4">Suporte</div>
                <div className="space-y-2 text-sm text-black/60">
                  <div>Central de ajuda</div>
                  <div>Falar com equipe</div>
                  <div>Reportar problema</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-black/10 text-sm text-black/40">
              <div>© 2025 Casa de Criadores Marketplace. Projeto sem fins lucrativos.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-black transition-colors">Instagram</a>
                <a href="#" className="hover:text-black transition-colors">Privacidade</a>
                <a href="#" className="hover:text-black transition-colors">Termos</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}