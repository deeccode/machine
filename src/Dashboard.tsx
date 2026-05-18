import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function Dashboard() {
  const [scanResult, setScanResult] =
    useState("");

  useEffect(() => {
    const scanner =
      new Html5QrcodeScanner(
        "reader",
        {
          qrbox: {
            width: 250,
            height: 250,
          },

          fps: 10,

          aspectRatio: 1.0,
        },
        false
      );

    scanner.render(
      (result) => {
        scanner.clear();

        setScanResult(result);

        alert("Barcode Scanned: " + result);
      },

      (err) => {
        console.log(err);
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-4 shadow-2xl">

        <h1 className="mb-4 text-center text-2xl font-bold">
          Barcode Scanner
        </h1>

        {/* SCANNER */}
        <div
          id="reader"
          className="overflow-hidden rounded-2xl"
        ></div>

        {/* RESULT */}
        {scanResult && (
          <div className="mt-6 rounded-2xl bg-green-100 p-4 text-center">

            <p className="text-sm text-gray-500">
              Scan Result
            </p>

            <h2 className="mt-2 break-all text-lg font-bold text-green-700">
              {scanResult}
            </h2>

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;