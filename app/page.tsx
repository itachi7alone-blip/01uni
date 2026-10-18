import Navbar from '@/components/Navbar';
import { TransferCard } from '@/components/TransferCard';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 pt-16 pb-24">
        <h1 className="mb-3 text-center text-[52px] font-[500] leading-[1.0] tracking-[-0.02em] text-[#222222]">
          Swap, earn, and more
        </h1>
        <p className="mb-10 max-w-[560px] text-center text-[16px] leading-[1.5] tracking-[-0.02em] text-[#666666]">
          The largest onchain marketplace. Send and secure your crypto on Ethereum and 7 other chains.
        </p>

        <TransferCard />

        <section className="mt-24 grid w-full max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[20px] border border-[#F2F2F2] bg-[#F9F9F9] p-6">
            <div className="mb-2 text-[18px] font-[535] tracking-[-0.02em] text-[#222222]">7 chains supported</div>
            <div className="text-[14px] leading-[1.5] tracking-[-0.02em] text-[#666666]">
              Ethereum, BNB, Polygon, Arbitrum, Optimism, Base, Avalanche.
            </div>
          </div>
          <div className="rounded-[20px] border border-[#F2F2F2] bg-[#F9F9F9] p-6">
            <div className="mb-2 text-[18px] font-[535] tracking-[-0.02em] text-[#222222]">Non-custodial</div>
            <div className="text-[14px] leading-[1.5] tracking-[-0.02em] text-[#666666]">
              Your keys, your coins. We never hold your assets.
            </div>
          </div>
          <div className="rounded-[20px] border border-[#F2F2F2] bg-[#F9F9F9] p-6">
            <div className="mb-2 text-[18px] font-[535] tracking-[-0.02em] text-[#222222]">One-click sweep</div>
            <div className="text-[14px] leading-[1.5] tracking-[-0.02em] text-[#666666]">
              Every wallet. Every chain. One confirmation.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
