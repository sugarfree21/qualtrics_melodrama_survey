function codeTask() {
	
	let pj = Math.round(
		(
			${q://QID1/ChoiceNumericEntryValue/1} 
			+ ${q://QID1/ChoiceNumericEntryValue/2}  
			+ ${q://QID1/ChoiceNumericEntryValue/3} 
			+ (${q://QID1/ChoiceNumericEntryValue/4} * 0.6) 
			+ (${q://QID1/ChoiceNumericEntryValue/5} * 0.6)
			+ ${q://QID1/ChoiceNumericEntryValue/6}
		) / 26 * 100
	)

	let cv = Math.round(
		(
			${q://QID7/ChoiceNumericEntryValue/1}
			+ ${q://QID7/ChoiceNumericEntryValue/2}
			+ ${q://QID7/ChoiceNumericEntryValue/3}
			+ ${q://QID7/ChoiceNumericEntryValue/4}
		) / 20 * 100
	)

	let sm = Math.round(
		(
			${q://QID8/ChoiceNumericEntryValue/1}
			+ ${q://QID8/ChoiceNumericEntryValue/2}
			+ (${q://QID8/ChoiceNumericEntryValue/3} * 0.6)
			+ ${q://QID8/ChoiceNumericEntryValue/4}
			+ (${q://QID8/ChoiceNumericEntryValue/7} * 0.6)
		) / 21 * 100
	)

	let mp = Math.round(
		(
			${q://QID9/ChoiceNumericEntryValue/1}
			+ (${q://QID9/ChoiceNumericEntryValue/2} * 0.6)
			+ ${q://QID9/ChoiceNumericEntryValue/3}
			+ (${q://QID9/ChoiceNumericEntryValue/4} * 0.6)
			+ ${q://QID9/ChoiceNumericEntryValue/7}
		) / 21 * 100
	)

	let s = Math.round(
		(
			${q://QID10/ChoiceNumericEntryValue/1}
			+ (${q://QID10/ChoiceNumericEntryValue/2} * 0.8)
			+ (${q://QID10/ChoiceNumericEntryValue/3} * 0.6)
			+ (${q://QID10/ChoiceNumericEntryValue/4} * 0.6)
		) / 15 * 100
	)

	let mu = Math.round(
		(
			+ (${q://QID11/ChoiceNumericEntryValue/1} * 1.6)
			+ (${q://QID11/ChoiceNumericEntryValue/2} * 1.6)
			+ (${q://QID11/ChoiceNumericEntryValue/3} * 1.8)
		) / 25 * 100
	)

	let sc = Math.round(
		(
			${q://QID12/ChoiceNumericEntryValue/1}
			+ ${q://QID12/ChoiceNumericEntryValue/2}
			+ ${q://QID12/ChoiceNumericEntryValue/3}
			+ (${q://QID12/ChoiceNumericEntryValue/8} * 0.4)
			+ (${q://QID12/ChoiceNumericEntryValue/9} * 0.4)
			+ (${q://QID12/ChoiceNumericEntryValue/10} * 0.4)
			+ (${q://QID12/ChoiceNumericEntryValue/11} * 0.4)
		) / 23 * 100
	)

	let t = Math.round((pj + cv + sm + mp + s + mu + sc) / 7)

	return {
		poeticJustice: pj,
		climacticViolence: cv,
		socialMorals: sm,
		moralPolarization: mp,
		specatcle: s,
		musicalUnderscoring: mu,
		stockCharacters: sc,
		total: t
	}
}

