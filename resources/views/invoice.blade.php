<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Invoice</title>

		<style>
			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 30px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: left;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 45px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}

			/** RTL **/
			.invoice-box.rtl {
				direction: rtl;
				font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
			}

			.invoice-box.rtl table {
				text-align: right;
			}

			.invoice-box.rtl table tr td:nth-child(2) {
				text-align: left;
			}
		</style>
	</head>

	<body>
		<div class="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								<td style="text-align: center" class="title">
									<img style="" src="https://res.cloudinary.com/carsads/image/upload/w_100,q_100/v1581928924/{{ $data['setting']['logo'] }}" alt="bachana tours">
									<h6 style="margin-top : 5px">{{ $data['result'] == 'NOT CAPTURED' ? '?????????? ?????? ?????? ??????????' : '?????????? ?????? ??????????'}}</h6>
								</td>

								<td>
									<b>?????? ?????????? :</b> {{ $data['paymentid'] }}<br />
                                    <b>?????? ???????????????? :</b> {{ $data['tranid'] }}<br />
									<b>?????????????? :</b> {{ $data['today'] }}<br />
									<b style="float:right"> : ????????????????</b> {{ $data['user']['name'] }}<br />
									<b style="float:right"> : ???????????? ????????????????????</b> {{ $data['user']['email'] }}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				{{-- <tr class="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									Sparksuite, Inc.<br />
									12345 Sunny Road<br />
									Sunnyville, CA 12345
								</td>

								<td>
									Acme Corp.<br />
									John Doe<br />
									john@example.com
								</td>
							</tr>
						</table>
					</td>
				</tr> --}}

				<tr class="heading">
					<td>???? ????</td>
					<td>?????????? ??????????</td>
				</tr>

				<tr class="heading">
					<td>??????????</td>

					<td>????????????</td>
				</tr>

				<tr class="item">
					<td>??.?? {{ $data['amt'] }}</td>

					<td>{{ $data['package']['name_ar'] }}</td>
				</tr>

				{{-- <tr class="item">
					<td>Hosting (3 months)</td>

					<td>$75.00</td>
				</tr>

				<tr class="item last">
					<td>Domain name (1 year)</td>

					<td>$10.00</td>
				</tr> --}}

				<tr class="total">
					<td><b>??.?? {{ $data['amt'] }}</b></td>

					<td><b>????????????????</b></td>
				</tr>
			</table>
		</div>
	</body>
</html>
