import React, { useCallback, useState } from "react";
import { useAuthStore } from "../../../auth/auth-store";
import { useI18nStore } from "../../../i18n/i18n-store";
import { EmailInputWithValidation } from "../validation/email-input-with-validation";
import { UsernameInputWithValidation } from "../validation/username-input-with-validation";
import { PasswordInputWithValidation } from "../validation/password-input-with-validation";
import { PrimaryButton } from "../../buttons/primary";
import { useEmailTakenStore } from "../validation/email-taken-store";
import { getErrorMessage } from "../validation/validation";
import { useErrorStore } from "../../../error/error-store";
import { InternalAnchorLink } from "../../anchor-link/internal-anchor-link";
import { AlertDialog } from "../../alert-dialog/alert-dialog";
import { MailIcon } from "../../icons/mail-icon";

export const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [yearsOfMigration, setYearsOfMigration] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here, you could send the data to an API or store it in state
    console.log("Submitted Data:", { name, age, country, yearsOfMigration });

    // Show success message
    setIsSubmitted(true);

    // Optionally reset form fields
    setName("");
    setAge("");
    setCountry("");
    setYearsOfMigration("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md">
          <h2 className="text-2xl font-semibold">Erledigt! ✅</h2>
          <p className="mt-2">Du kannst jetzt weiter machen. Geh auf "Karte" und such nach deiner Adresse.</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Your Details</h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Name Input */}
            <div className="flex flex-col gap-y-2 pt-5">
              <label htmlFor="name" className="block font-semibold">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Age Input */}
            <div className="flex flex-col gap-y-2 pt-6">
              <label htmlFor="age" className="block font-semibold">Age:</label>
              <input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
                min="0"
              />
            </div>

            {/* Country of Origin Input */}
            <div className="flex flex-col gap-y-2 pt-6">
              <label htmlFor="country" className="block font-semibold">Country of Origin:</label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Years of Migration Input */}
            <div className="flex flex-col pt-6">
              <label htmlFor="yearsOfMigration" className="block font-semibold">Years of Migration:</label>
              <input
                id="yearsOfMigration"
                type="number"
                value={yearsOfMigration}
                onChange={(e) => setYearsOfMigration(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
                min="0"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-11">
              <PrimaryButton type="submit" label="Register" />
            </div>
          </form>
        </>
      )}
    </div>
  );
};
