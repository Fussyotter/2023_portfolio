import React from "react";
export default function BigCircle () {
    return(
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
			<g transform-origin='50 50'>
				<circle r='2' fill='gray'>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 50 50'
						to='360 50 50'
						dur='10s'
						repeatCount='indefinite'
					/>
				</circle>
				<circle r='4' fill='gray'>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 50 50'
						to='-360 50 50'
						dur='12s'
						repeatCount='indefinite'
					/>
				</circle>
				<circle r='6' fill='gray'>
					<animateTransform
						attributeName='transform'
						attributeType='XML'
						type='rotate'
						from='0 50 50'
						to='360 50 50'
						dur='8s'
						repeatCount='indefinite'
					/>
				</circle>
			</g>
		</svg>)

}