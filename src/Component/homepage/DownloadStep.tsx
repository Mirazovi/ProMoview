import { ArrowDown, Download, FileDown, HardDrive } from "lucide-react"

export default function DownloadStep() {
  return (
    <div className="bg-[#1c1917] text-white">

    <section className="py-12 md:py-16 bg-card lg:w-[90%] mx-auto">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How to Download</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to download your favorite movies in high quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 bg-[#30191c]">
              <Download className="h-8 w-8 text-[#c2193e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Step 1: Choose Quality</h3>
            <p className="text-muted-foreground">
              Select your preferred quality option from the download links (720p, 1080p, or 4K).
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 bg-[#30191c]">
              <FileDown className="h-8 w-8 text-[#c2193e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Step 2: Download File</h3>
            <p className="text-muted-foreground">
              Click the download button and save the movie file to your preferred location on your device.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 bg-[#30191c]">
              <HardDrive className="h-8 w-8 text-[#c2193e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Step 3: Enjoy!</h3>
            <p className="text-muted-foreground">
              Open the downloaded file with your favorite media player and enjoy your movie in high quality.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-lg border bg-muted/30">
          <h3 className="text-xl font-bold mb-4">Download Tips</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <ArrowDown className="h-5 w-5 text-primary shrink-0 mt-0.5 text-[#c2193e]" />
              <span>For the best experience, we recommend using a download manager for larger files.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowDown className="h-5 w-5 text-primary shrink-0 mt-0.5 text-[#c2193e]" />
              <span>4K movies require more storage space and a compatible device for playback.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowDown className="h-5 w-5 text-primary shrink-0 mt-0.5 text-[#c2193e]" />
              <span>All our downloads are virus-free and checked for quality before being made available.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowDown className="h-5 w-5 text-primary shrink-0 mt-0.5 text-[#c2193e]" />
              <span>Having trouble with downloads? Check our FAQ section or contact support.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

